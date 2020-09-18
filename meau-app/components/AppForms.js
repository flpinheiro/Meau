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
    const [value, setChecked] = React.useState(0);
    const onChange = props.onChange;
    const disabled = props.disabled ?? false;
    return (
        <View >
            <Text style={styles.title}>{props.name}</Text>
            <View style={styles.lineContainer}>
            {props.list.map(function (d, idx) {
                return (
                    <View style={styles.lineContainer} key={idx}>
                        <RadioButton
                        disabled={disabled}
                            value={d.id}
                            status={value === d.id ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(d.id);
                                onChange(d.id);
                            }}
                        />
                        <Text>{d.name}</Text>
                    </View>
                );
            })}
            </View>
        </View>
    );
};

export const CheckboxListApp = (props) => {
    const [checked, setChecked] = React.useState(false);
    const onChange = props.onChange;
    return (
        <View>
            <Text>{props.name}</Text>
            {props.list.map(function (d, idx) {
                return (
                    <View>
                        <Checkbox
                            disabled={props.disabled}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                                onChange(!checked);
                            }}
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
    const onChange = props.onChange;
    const disabled = props.disabled ?? false;
    return (
        <>
            <Checkbox
                disabled={disabled}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                    onChange(!checked);
                }}
            />
            <Text>{props.name}</Text>
        </>
    );
};


const styles = StyleSheet.create({
    lineContainer: {
        flexDirection: 'row',
        alignItems: "center",
      },
      title: {
        color: '#f7a800',
        fontSize: 12,
        fontFamily: 'Roboto'
      },
});