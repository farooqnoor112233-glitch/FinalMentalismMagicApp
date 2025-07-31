import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Eye, Check } from 'lucide-react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { getRandomizedItems, categoryData } from '@/utils/categoryData';

const { width, height } = Dimensions.get('window');

interface ItemPosition {
  item: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

export default function SelectionScreen() {
  const router = useRouter();
  const { category } = useLocalSearchParams();
  const [items, setItems] = useState<string[]>([]);
  const [itemPositions, setItemPositions] = useState<ItemPosition[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    if (category && typeof category === 'string') {
      const categoryItems = getRandomizedItems(category as keyof typeof categoryData);
      setItems(categoryItems);
      generateRandomPositions(categoryItems);
    }
  }, [category]);

  const generateRandomPositions = (itemList: string[]) => {
    const positions: ItemPosition[] = [];
    // Clear selection when regenerating positions
    setSelectedItem(null);
    
    const itemsPerRow = 2;
    const itemWidth = 140;
    const itemHeight = 60;
    const screenWidth = width - 40;
    const rowHeight = 100;
    const totalRows = Math.ceil(itemList.length / itemsPerRow);
    const contentHeight = totalRows * rowHeight + 200; // Extra padding at bottom
    const columnWidth = screenWidth / itemsPerRow;
    
    itemList.forEach((item, index) => {
      const row = Math.floor(index / itemsPerRow);
      const col = index % itemsPerRow;
      
      // Calculate base position for this grid cell
      const baseX = col * columnWidth + 20;
      const baseY = row * rowHeight + 30;
      
      // If we can't find a good position after max attempts, use a grid fallback
      // Add random offset within the cell to create scattered effect but prevent overlap
      const randomOffsetX = Math.random() * 20 - 10; // ±10px
      const randomOffsetY = Math.random() * 20 - 10; // ±10px
      
      const position = {
        x: Math.max(10, Math.min(baseX + randomOffsetX, screenWidth - 120 - 10)),
        y: Math.max(10, baseY + randomOffsetY),
      };
      
      positions.push({
        item,
        x: position.x,
        y: position.y,
        rotation: (Math.random() - 0.5) * 40, // ±20 degrees
        scale: 0.9 + Math.random() * 0.2,
      });
    });
    
    setItemPositions(positions);
  };

  const handleItemSelect = (item: string) => {
    if (selectedItem === item) {
      // If clicking the same item, navigate to reveal
      router.push({
        pathname: '/reveal/[category]',
        params: { category, selectedItem: item }
      } as any);
    } else {
      // Otherwise, just select the item
      setSelectedItem(item);
    }
  };

  const goBack = () => {
    router.back();
  };

  if (!category || typeof category !== 'string') {
    return null;
  }

  const categoryName = categoryData[category as keyof typeof categoryData]?.name || 'Items';

  return (
    <LinearGradient colors={['#1a0b3d', '#2d1b69', '#4c1d95']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Choose from {categoryName}</Text>
          <Text style={styles.subtitle}>Select one item secretly</Text>
        </View>
      </View>

      {/* Instruction Card */}
      <View style={styles.instructionCard}>
        <Eye size={20} color="#c084fc" />
        <Text style={styles.instructionText}>
          Select an item without letting the magician see your choice!
        </Text>
      </View>

      {/* Items scattered randomly */}
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={[styles.itemsContainer, { minHeight: Math.ceil(itemPositions.length / 2) * 100 + 200 }]}
        showsVerticalScrollIndicator={true}
      >
        <View style={[styles.itemsContent, { height: Math.ceil(itemPositions.length / 2) * 100 + 200 }]}>
          {itemPositions.map((position, index) => (
            <TouchableOpacity
              key={index}
              style={[
                selectedItem === position.item ? styles.selectedItemButton : styles.itemButton,
                {
                  position: 'absolute',
                  left: position.x,
                  top: position.y,
                  transform: [
                    { rotate: `${position.rotation}deg` },
                    { scale: position.scale }
                  ],
                },
              ]}
              onPress={() => handleItemSelect(position.item)}
            >
              <View style={styles.itemContent}>
                <Text style={[
                  styles.itemText,
                  selectedItem === position.item && styles.selectedItemText
                ]}>
                  {position.item}
                </Text>
                {selectedItem === position.item && <Check size={16} color="#10b981" style={styles.checkIcon} />}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Continue button when item is selected */}
      {selectedItem && (
        <View style={styles.continueContainer}>
          <TouchableOpacity 
            style={styles.continueButton} 
            onPress={() => router.push({
              pathname: '/reveal/[category]',
              params: { category, selectedItem }
            } as any)}
          >
            <Text style={styles.continueButtonText}>Continue with "{selectedItem}"</Text>
          </TouchableOpacity>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: '#c084fc',
    marginTop: 2,
  },
  instructionCard: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(196, 132, 252, 0.3)',
  },
  instructionText: {
    flex: 1,
    fontSize: 14,
    color: 'white',
    marginLeft: 12,
  },
  scrollContainer: {
    flex: 1,
  },
  itemsContainer: {
    flexGrow: 1,
  },
  itemsContent: {
    position: 'relative',
    minHeight: '100%',
  },
  itemButton: {
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(196, 132, 252, 0.4)',
    width: 140,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedItemButton: {
    backgroundColor: 'rgba(16, 185, 129, 0.4)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: '#10b981',
    width: 140,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#10b981',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 6,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  itemText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
    flexWrap: 'wrap',
  },
  selectedItemText: {
    color: 'white',
  },
  checkIcon: {
    marginLeft: 4,
  },
  continueContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(26, 11, 61, 0.95)',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  continueButton: {
    backgroundColor: '#10b981',
    borderRadius: 12,
    paddingVertical: 16,
    justifyContent: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});