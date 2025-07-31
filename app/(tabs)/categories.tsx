import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Palette, Building2, Apple, Package, PawPrint, Star, CircleHelp as HelpCircle } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const categories = [
  {
    id: 'colors',
    name: 'Colours',
    description: 'Vibrant hues and shades',
    icon: Palette,
    gradient: ['#ef4444', '#f97316'],
  },
  {
    id: 'objects',
    name: 'Objects',
    description: 'Everyday items around us',
    icon: Package,
    gradient: ['#8b5cf6', '#a855f7'],
  },
  {
    id: 'animals',
    name: 'Animals',
    description: 'Creatures from nature',
    icon: PawPrint,
    gradient: ['#f59e0b', '#d97706'],
  },
  {
    id: 'cities',
    name: 'Cities',
    description: 'Famous places worldwide',
    icon: Building2,
    gradient: ['#3b82f6', '#1d4ed8'],
  },
  {
    id: 'fruits',
    name: 'Fruits',
    description: 'Delicious natural treats',
    icon: Apple,
    gradient: ['#10b981', '#059669'],
  },
  {
    id: 'celebrities',
    name: 'Celebrities',
    description: 'Famous personalities',
    icon: Star,
    gradient: ['#ec4899', '#be185d'],
  },
];

export default function CategoriesScreen() {
  const router = useRouter();

  const selectCategory = (categoryId: string) => {
    router.push(`/selection/${categoryId}` as any);
  };

  return (
    <LinearGradient colors={['#1a0b3d', '#2d1b69', '#4c1d95']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Choose Your Category</Text>
        <Text style={styles.subtitle}>Do not show any of your selections to the magician</Text>

        <View style={styles.categoriesContainer}>
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <TouchableOpacity
                key={category.id}
                onPress={() => selectCategory(category.id)}
                style={styles.categoryButton}
              >
                <LinearGradient
                  colors={category.gradient}
                  style={styles.categoryCard}
                >
                  <IconComponent size={40} color="white" />
                  <Text style={styles.categoryName}>{category.name}</Text>
                  <Text style={styles.categoryDescription}>{category.description}</Text>
                  <View style={styles.arrowContainer}>
                    <Text style={styles.arrow}>→</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.helpCard}>
          <HelpCircle size={24} color="#c084fc" />
          <Text style={styles.helpText}>
            Choose any category freely and then make a single selection on the next page
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#c084fc',
    textAlign: 'center',
    marginBottom: 30,
  },
  categoriesContainer: {
    gap: 16,
  },
  categoryButton: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  categoryCard: {
    padding: 24,
    alignItems: 'center',
    minHeight: 140,
    justifyContent: 'center',
    position: 'relative',
  },
  categoryName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 12,
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  arrowContainer: {
    position: 'absolute',
    bottom: 16,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  helpCard: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'rgba(196, 132, 252, 0.3)',
  },
  helpText: {
    flex: 1,
    fontSize: 14,
    color: 'white',
    marginLeft: 12,
    lineHeight: 20,
  },
});