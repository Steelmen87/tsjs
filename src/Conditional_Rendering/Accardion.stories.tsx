import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,

} as ComponentMeta<typeof Accordion>;

export const Accordion_False: ComponentStory<typeof Accordion> = (args) => <Accordion   titleValue={'Accordion'} collapsed={false}/>;
