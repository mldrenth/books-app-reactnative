import React from 'react'
import { FlatList, Text, ListRenderItem, View } from 'react-native'
import IBook from '../types/Book'
import LibraryCard from './LibraryCard'

export interface BookListProps {
    movies: IBook[]
}



const BookList: React.FC<BookListProps> = ({ movies }) => {
    const renderItem: ListRenderItem<IBook> = ({ item, index }) => (
        <LibraryCard book={item} key={index} />
    )

    return (
        <View>
        <Text>sdfsdfsfsf</Text>
        <FlatList horizontal data={movies} renderItem={renderItem}></FlatList>
        </View>
    )
}

export default BookList;