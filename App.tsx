import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import books from "./data/books.json"
import IBook from './types/Book';
import BookList from './components/BookList';

export default function App() {
  const [libraryBooks, setLibraryBooks] = useState<IBook[]>(books)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <BookList movies={libraryBooks} />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
});
