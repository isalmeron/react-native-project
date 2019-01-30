import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import response from '../../mockedResponse';
import Question from '../Question';

export default class QuestionList extends Component {
    render() {
        return (
            <FlatList
                style={styles.flatList}
                data={response.questions}
                keyExtractor={(item) => `item-${item.question_id}`}
                renderItem={({item}) => <Question question={item} />}
            />
        );
    }
}

const styles = StyleSheet.create({
    flatList: {

    }
});

