import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Textarea} from './FormsControl/FormsControls'
import s from '../common/AddPostForm.module.css'
import {UniversalButton} from './UniversalButton'
import React, {useState} from "react";


const AddPostFormNew: React.FC<InjectedFormProps<AddPostFormDataType>> = (
    props
) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const editModeOn = () => {
        setEditMode(true)

    }
    const editModeOff = () => {
        if (document.getElementById('tx').textContent) return
        setEditMode(false)
        console.log(editMode)


    }


    return (

        <div onMouseLeave = {editModeOff} className = {s.addPostForm}>
            {!editMode
                ? <div className = {s.whatsNew} onMouseEnter = {editModeOn}> What's new?</div>
                :
                <form className = {s.form} onSubmit = {props.handleSubmit}>
                    <Field
                        id = {'tx'}
                        autoFocus
                        className = {s.field}
                        component = {Textarea}
                        name = {'newPostBody'}
                        placeholder = {"What's new?"}
                    />
                    <UniversalButton title = {'post'} />
                </form>


            }
        </div>



        // <div onBlur = {editModeOff} className = {s.addPostForm}>
        //     {!editMode
        //         ? <div className = {s.whatsNew} onClick = {editModeOn}> What's new?</div>
        //         : <form className = {s.form} onSubmit = {props.handleSubmit}>
        //             <Field
        //                 id = {'tx'}
        //                 autoFocus
        //                 className = {s.field}
        //                 component = {Textarea}
        //                 name = {'newPostBody'}
        //                 placeholder = {"What's new?"}
        //             />
        //             <UniversalButton title = {'post'} />
        //         </form>
        //
        //     }
        // </div>
        // <div className = {s.addPostForm} onBlur = {editModeOff} onClick = {editModeOn} id = {'tx'}>
        //     <form className = {editMode ? s.form : s.whatsNew}
        //           onSubmit = {props.handleSubmit}>
        //
        //         {
        //             editMode &&
        //             <Field
        //                 id = {'tx'}
        //                 className = {s.field}
        //                 component = {Textarea}
        //                 name = {'newPostBody'}
        //                 placeholder = {"What's new?"}
        //             />
        //         }
        //         {editMode && <UniversalButton title = {'post'} />}
        //     </form>
        // </div>


    )


}

export const AddPostFormReduxNew = reduxForm<AddPostFormDataType>({
    form: 'AddPostForm'
})(AddPostFormNew)

export type AddPostFormDataType = {
    newPostBody: string


}
