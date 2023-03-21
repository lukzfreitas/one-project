import { ComponentStory, ComponentMeta } from '@storybook/react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Tab from '../../../components/Navigation/Tab';

export default {
    title: 'Example/Tab',
    component: Tab,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const TabComponent = Template.bind({});

TabComponent.args = {
    menuItens: [
        { key: 0, label: 'Menu item 1' },
        { key: 1, label: 'Menu item 2' },
        { key: 2, label: 'Menu item 3' },
        { key: 3, label: 'Menu item 4' },
        { key: 4, label: 'Menu item 5' }
    ],
    menuSelected: 2,
};
