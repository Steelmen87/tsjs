import React, {useMemo, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import UseMemo from "./UseMemo";
import {HelpsToReactMemo} from './HelpsReactMemo';

export default {
    title: 'useMemo/exm',
    component: HelpsToReactMemo,
} as ComponentMeta<typeof HelpsToReactMemo>;

export const UseMemoAddREACT: ComponentStory<typeof HelpsToReactMemo> = (args) => {

    return <div>
        <HelpsToReactMemo/>
    </div>
};
