import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/header'
import Post from '../components/post'

export default class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Lucas Zaranza',
            email: 'lucaszaranza@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Steve Vai',
                comment: 'Bora tocar man!'
            }, { 
                nickname: 'Uílame',
                comment: 'TR00 do autodidata da guitarra!'
            }]
        }, {
            id: Math.random(),
            nickname: 'Francisco Leandro Lima',
            email: 'frleli@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: [{

            }]
        }]
    }

    render () {
        return (
            <View style={styles.container}>
                <Header/>
                <FlatList data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => 
                        <Post key={item.id} {...item} /> }>
                    
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})