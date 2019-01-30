import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Avatar, Badge, Card } from 'react-native-elements';


export default class Detail extends Component {
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
        const {
            answer,
            answeredAt,
            user
        } = Answer;

        console.log(this.props.navigation);

        return (
            <TouchableOpacity onPress={this.props.navigation.navigate('Details', {...this.props})}>
                <Card>
                    <View stye={styles.DetailTitle}>
                        <Text>{question_id} {updatedAt} </Text>
                        <Badge value={numComments} />
                        <Badge value={Votes} />
                        <Text>{question}</Text>
                    </View>
                    <View stye={styles.DetailAnswer}>
                        <View stye={styles.AnswerTitle}>
                            <Text>Answered by {user.full_name}</Text>
                            <Text>{answeredAt}</Text>
                        </View>
                        <Text>answer</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    DetailTitle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    DetailAnswer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#EEF1F4',
    },
    AnswerTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});
