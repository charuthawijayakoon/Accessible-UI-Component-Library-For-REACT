import { Typography, Button, Card } from '@mui/material'
import { Meta } from '@storybook/react'
import React from 'react'
import UuiDialogBox from './DialogBox'
import UuiDialogBoxSM from './DialogBoxSM'
import UuiDialogBoxTask from './DialogBoxTask'
import UuiDialogBoxXS from './DialogBoxXS'


export default {
    title: 'components/Dialog'
} as Meta

export const DialogBox = () => {

    const [open, setOpen] = React.useState(false)
    const [open1, setOpen1] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)
    const [open3, setOpen3] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleClickOpen1 = () => {
        setOpen(true)
    }

    const handleClose1 = () => {
        setOpen1(false)
    }

    const handleClickOpen2 = () => {
        setOpen2(true)
    }

    const handleClose2 = () => {
        setOpen2(false)
    }

    const handleClickOpen3 = () => {
        setOpen3(true)
    }

    const handleClose3 = () => {
        setOpen3(false)
    }



    return (
        <Card className="componentCard">
            <div className="componentCard__title">
                Modals
            </div>

            <div className='formCard__row modalsTop'>
                <div className='formCard__item'>
                    <Button variant='outlined' color='primary' onClick={handleClickOpen}>
                        Dialog Box
                    </Button>


                    <UuiDialogBox open={open} onClose={handleClose} title={''} icon={undefined} />

                </div>
                <div className='formCard__item'>
                    <Button variant='outlined' color='primary' onClick={handleClickOpen1}>
                        Dialog Box SM
                    </Button>


                    <UuiDialogBoxSM open={open1} onClose={handleClose1} title={''} icon={undefined} />

                </div>
                <div className='formCard__item'>
                    <Button variant='outlined' color='primary' onClick={handleClickOpen2}>
                        Dialog Box Task
                    </Button>


                    <UuiDialogBoxTask open={open2} onClose={handleClose2} title={''} icon={undefined} />

                </div>
                <div className='formCard__item'>
                    <Button variant='outlined' color='primary' onClick={handleClickOpen3}>
                        Dialog Box XS
                    </Button>


                    <UuiDialogBoxXS open={open3} onClose={handleClose3} title={''} icon={undefined} />

                </div>

            </div>
            <br />

        </Card>

    );
}
