import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Sparkles, RefreshCw, Shuffle, Check } from 'lucide-react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { generateMagicList, categoryData, isLetterStraight } from '@/utils/categoryData';
import { adManager } from '@/utils/adManager';

export default function RevealScreen() {
  const router = useRouter();
  const { category, selectedItem } = useLocalSearchParams();
  const [magicList, setMagicList] = useState<string[]>([]);

  useEffect(() => {
    if (category && selectedItem && typeof category === 'string' && typeof selectedItem === 'string') {
      const list = generateMagicList(selectedItem, category as keyof typeof categoryData);
      setMagicList(list);
    }
  }, [category, selectedItem]);

  useEffect(() => {
    // Increment trick counter when reveal screen is shown
    adManager.incrementTrickCounter();
  }, []);

  const shuffleList = () => {
    if (category && selectedItem && typeof category === 'string' && typeof selectedItem === 'string') {
      const newList = generateMagicList(selectedItem, category as keyof typeof categoryData);
      setMagicList(newList);
    }
  };

  const goBack = () => {
    router.back();
  };

  const startNewTrick = async () => {
    // Check if we should show an ad before starting new trick
    if (adManager.shouldShowAd()) {
      const adShown = await adManager.showRewardedAd();
      if (adShown) {
        // Ad was shown successfully, navigate after ad closes
        // The ad manager will handle navigation via event listeners
        setTimeout(() => {
          router.push('/categories');
        }, 500);
      } else {
        // Ad failed to show, continue normally
        router.push('/categories');
      }
    } else {
      // No ad needed, continue normally
      router.push('/categories');
    }
  };

  const goHome = () => {
    router.push('/');
  };

  if (!category || !selectedItem || typeof category !== 'string' || typeof selectedItem !== 'string') {
    return null;
  }

  const categoryName = categoryData[category as keyof typeof categoryData]?.name || 'Items';
  const selectedLetterType = isLetterStraight(selectedItem[0]) ? 'straight' : 'curved';

  return (
    <LinearGradient colors={['#1a0b3d', '#2d1b69', '#4c1d95']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Your Selection</Text>
          <Text style={styles.subtitle}>Read these items aloud</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Instruction for spectator */}
        <View style={styles.instructionCard}>
          <Sparkles size={24} color="#fbbf24" />
          <Text style={styles.instructionText}>
            Read these 10 {categoryName.toLowerCase()} aloud. The magician will guess your secret choice!
          </Text>
        </View>

        {/* Magic list */}
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.shuffleButton} onPress={shuffleList}>
            <Shuffle size={20} color="white" />
            <Text style={styles.shuffleButtonText}>Shuffle Order</Text>
          </TouchableOpacity>
          
          {magicList.map((item, index) => {
            const isSelectedItem = item === selectedItem;
            return (
              <View
                key={index}
                style={[
                  styles.listItem,
                  isSelectedItem && styles.selectedListItem
                ]}
              >
                <View style={styles.numberCircle}>
                  <Text style={styles.numberText}>{index + 1}</Text>
                </View>
                <Text style={styles.itemText}>
                  {item}
                </Text>
                {isSelectedItem && (
                  <View style={styles.selectedIndicator}>
                    <Check size={16} color="#10b981" />
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* Magician hint (only visible in the code, not to users) */}

        {/* Action buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.newTrickButton} onPress={startNewTrick}>
            <RefreshCw size={20} color="white" />
            <Text style={styles.newTrickButtonText}>
              {adManager.shouldShowAd() ? 'Amazing! Try Another Trick' : 'I Don\'t Believe It. Do That Again!'}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.homeButton} onPress={goHome}>
            <Text style={styles.homeButtonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  instructionCard: {
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.3)',
  },
  instructionText: {
    flex: 1,
    fontSize: 14,
    color: 'white',
    marginLeft: 12,
    lineHeight: 20,
  },
  listContainer: {
    marginBottom: 24,
  },
  shuffleButton: {
    backgroundColor: '#8b5cf6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
  shuffleButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 6,
  },
  listItem: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(196, 132, 252, 0.3)',
  },
  numberCircle: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  numberText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  selectedListItem: {
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    borderColor: '#10b981',
    borderWidth: 2,
    shadowColor: '#10b981',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  selectedIndicator: {
    backgroundColor: 'rgba(16, 185, 129, 0.3)',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  buttonContainer: {
    gap: 12,
  },
  newTrickButton: {
    backgroundColor: '#8b5cf6',
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newTrickButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  homeButton: {
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(196, 132, 252, 0.4)',
  },
  homeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
