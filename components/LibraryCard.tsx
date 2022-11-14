import { useEffect, useState } from "react"
import IBook from "../types/Book"
import { View, Image, ImageSourcePropType, StyleSheet } from "react-native"

export interface LibraryCardProps {
    book: IBook
}

const LibraryCard: React.FC<LibraryCardProps> = ({ book }) => {


    const imageUrl = { uri: `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg` }


    return (
        <View>
            <Image style={styles.image} source={imageUrl} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'contain',
        height: 300,
        width: 200,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    }
});

export default LibraryCard