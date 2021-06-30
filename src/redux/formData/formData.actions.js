import {UPDATE} from './formData.types'

export const updateFormData = (values) => {
    return {
        type: UPDATE,
        values
    }
}