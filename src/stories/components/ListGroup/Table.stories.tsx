import { ComponentStory, ComponentMeta } from '@storybook/react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Table from '../../../components/ListGroup/Table';

export default {
    title: 'Example/Table',
    component: Table,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const TableComponent = Template.bind({});

TableComponent.args = {
    header: ['Nome', 'CNPJ', 'E-mail'],
    rows: [
        { key: '1', columns: ['Lucas', '53.852.857/0001-04', 'lucas@mail.com'] },
        { key: '2', columns: ['Camila', '37.372.032/0001-28', 'camila@mail.com'] },
    ],
    title: 'Cadastro'
};
