import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Platform, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Eye, ArrowRight, Sparkles } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [showInstructions, setShowInstructions] = useState(false);
  const router = useRouter();

  const beginMagicTrick = () => {
    router.push('/categories');
  };

  // Simple touch detection for two-finger swipe
  const handleTouchStart = (e: any) => {
    if (e.nativeEvent.touches && e.nativeEvent.touches.length === 2) {
      setShowInstructions(true);
    }
  };

  return (
    <LinearGradient colors={['#1a0b3d', '#2d1b69', '#4c1d95']} style={styles.container}>
      <View style={styles.content} onTouchStart={handleTouchStart}>
      <View style={styles.starsContainer}>
        <Sparkles size={32} color="#c084fc" />
        <Sparkles size={24} color="#a855f7" style={styles.star2} />
        <Sparkles size={28} color="#8b5cf6" style={styles.star3} />
        <Sparkles size={20} color="#c084fc" style={styles.star4} />
      </View>

      <Text style={styles.title}>Mystical Mind Reader</Text>
      <Text style={styles.subtitle}>The Ultimate Mentalism Experience</Text>

      <View style={styles.mainCard}>
        <Eye size={60} color="white" style={styles.eyeIcon} />
        <Text style={styles.cardTitle}>Ready to Experience Real Mind Reading?</Text>
        <Text style={styles.cardSubtitle}>
          Select a category from the next page and get ready to be amazed
        </Text>

        <TouchableOpacity style={styles.beginButton} onPress={beginMagicTrick}>
          <Text style={styles.beginButtonText}>Begin Thought Transfer</Text>
          <ArrowRight size={24} color="white" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      {/* Instructions Modal */}
      <Modal
        visible={showInstructions}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowInstructions(false)}
      >
        <LinearGradient colors={['#1a0b3d', '#2d1b69']} style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalScrollContent} showsVerticalScrollIndicator={false}>
            <Text style={styles.modalTitle}>🎩 Magician Instructions</Text>
            <View style={styles.instructionCard}>
              <Text style={styles.instructionTitle}>How the Trick Works:</Text>
              <Text style={styles.instructionText}>
                1. Hand the phone to the spectator to choose any category
              </Text>
              <Text style={styles.instructionText}>
                2. They will see 100+ items spread randomly on screen
              </Text>
              <Text style={styles.instructionText}>
                3. The spectator will secretly select one item
              </Text>
              <Text style={styles.instructionText}>
                4. The app will show them 10 items, including their own choice
              </Text>
              <Text style={styles.instructionText}>
                5. They will read all 10 items to you (without you looking at the screen), and you will guess which item is their selected choice.
              </Text>
              <Text style={styles.instructionHighlight}>
                🔮 The Secret: Their choice is the only one with a starting letter that is different to the rest.{'\n'}
                The Alphabet is split into two categories (Straight Letters and Curved Letters).{'\n'}
                The Straight Letters are: A, E, F, H, I, K, L, M, N, T, V, W, X, Y, Z{'\n'}
                The Curved Letters are: B, C, D, G, J, O, P, Q, R, S, U
              </Text>
              <Text style={styles.instructionText}>
                6. Listen carefully for the odd one out and reveal that as the choice they selected. You will do all this without touching or looking at the phone
              </Text>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={() => setShowInstructions(false)}>
              <Text style={styles.closeButtonText}>Got it! 🎭</Text>
            </TouchableOpacity>
          </ScrollView>
        </LinearGradient>
      </Modal>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  container: { flex: 1 },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  starsContainer: { position: 'relative', marginBottom: 30, width: 80, height: 80 },
  star2: { position: 'absolute', top: -10, right: -5 },
  star3: { position: 'absolute', bottom: 0, left: -10 },
  star4: { position: 'absolute', top: 20, right: 15 },
  title: { fontSize: 28, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#c084fc', textAlign: 'center', marginBottom: 40 },
  mainCard: {
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
    borderWidth: 1,
    borderColor: 'rgba(196, 132, 252, 0.3)',
  },
  eyeIcon: { marginBottom: 20 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 12, textAlign: 'center' },
  cardSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
  },
  beginButton: {
    backgroundColor: 'rgba(168, 85, 247, 0.8)',
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 200,
    justifyContent: 'center',
  },
  beginButtonText: { color: 'white', fontSize: 14, fontWeight: '600', marginRight: 8 },
  arrowIcon: { marginLeft: 4 },
  modalContainer: { flex: 1, padding: 20 },
  modalScrollContent: { flexGrow: 1, paddingBottom: 20 },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  instructionCard: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgba(196, 132, 252, 0.3)',
  },
  instructionTitle: { fontSize: 20, fontWeight: 'bold', color: '#c084fc', marginBottom: 16 },
  instructionText: { fontSize: 16, color: 'white', marginBottom: 12, lineHeight: 22 },
  instructionHighlight: {
    fontSize: 14,
    color: '#fbbf24',
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    lineHeight: 20,
  },
  closeButton: { backgroundColor: '#8b5cf6', borderRadius: 12, paddingVertical: 16, alignItems: 'center' },
  closeButtonText: { color: 'white', fontSize: 18, fontWeight: '600' },
});