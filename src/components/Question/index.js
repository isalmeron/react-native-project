import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Avatar,
    Icon,
    Card,
    Badge,
    Text
} from 'react-native-elements';

export default class Question extends Component {
    render() {
        const {
            question_id,
            question,
            updatedAt,
            numComments,
            Votes,
            created_by_user,
            Answer,
        } = this.props.question;

        const full_name = created_by_user ? created_by_user.full_name : 'Uknown';

        return (
            <Card style={styles.Container} key={question_id}>
                <View style={styles.Avatar}>
                    <Avatar
                        size="small"
                        rounded
                        icon={{name: 'user', type: 'font-awesome'}}
                    />
                    <Text>By {full_name}</Text>
                </View>
                <View style={styles.Title}>
                    <Text>{updatedAt}</Text>
                    <Badge value={numComments} status="primary"/>
                </View>
                <View style={styles.Question}>
                    <Text>{question}</Text>
                </View>
                <View style={styles.Footer}>
                    <Badge value={Votes} status="success" />
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    Avatar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    Title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    Question: {

    },
    Footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    }
})
