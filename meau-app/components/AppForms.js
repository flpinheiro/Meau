import React from 'react'

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { TextInput, RadioButton, Checkbox } from 'react-native-paper';

export const TextInputApp = (props) => {
    return (
        <View>
            <Text>{props.name}:</Text>
            <TextInput></TextInput>
        </View>
    );
};

export const RadioButtonApp = (props) => {
    const [checked, setChecked] = React.useState('');

    return (
        <View>
            <Text>{props.name}</Text>
            {props.values.map(function (d, idx) {
                return (
                    <View>
                        <RadioButton
                            value={d.name}
                            status={checked === d.name ? 'checked' : 'unchecked'}
                            onPress={() => setChecked(d.name)}
                        />
                        <Text>{d.name}</Text>
                    </View>
                );
            })}
        </View>
    );
};

export const CheckboxApp = (props) => {
    const [checked, setChecked] = React.useState(false);

    return (
        <View>
            <Text>{props.name}</Text>
            {props.values.map(function (d, idx) {
                return (
                    <View>
                        <Checkbox
                            disabled={props.disabled}
                            status={d.checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!d.checked);
                            }}
                        />
                        <Text>{d.name}</Text>
                    </View>
                );
            })}
        </View>
    );
};
