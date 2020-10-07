import React, {Component} from "react";
import {Text} from "react-native";

interface Props {
    message?: string;
}

export default class ExampleComponent extends Component<Props> {

    static defaultProps = {
        message: "Boilerplate Example Component",
    };

    render() {
        const {message} = this.props;
        return (
            <Text>
                {message}
            </Text>
        )
    }
}

