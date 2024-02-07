import { Meta } from '@storybook/react'
import UuiCollapseView from './CollapseView'
import { Card } from '@mui/material'
import UuiCollapseViewBasic from './CollapseViewBasic'
import React from 'react'


export default {
    title: 'Components/CollapseView'
} as Meta

export const defalut = () => {
    return (
        <Card className="componentCard">
            <div className="componentCard__title">
                Accordion
            </div>
            <div className='accordionDiv'>
            <h1 className="componentCard__subHeader">Collapse View</h1>
            <UuiCollapseView title='Example' subtitle='Example subtitle'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates amet ipsa ex illum totam voluptatum omnis, maxime ad molestias magnam officiis. Vitae repudiandae ipsum ratione corporis obcaecati esse. Tenetur, dolorum?
            </UuiCollapseView>
            </div>

            <div className='accordionDiv'>
            <h1 className="componentCard__subHeader">Collapse View Basic</h1>
                <UuiCollapseViewBasic title={'General settings'} subtitle={''} />
            </div>
            
        </Card>

    );
} 
