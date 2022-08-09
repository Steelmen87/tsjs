import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import FullInput from "./FullInput";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Components/FullInput',
    component: FullInput,
} as ComponentMeta<typeof FullInput>;

export const Template: ComponentStory<typeof FullInput> = () => <FullInput setMessage={action('Add text')}/>;
