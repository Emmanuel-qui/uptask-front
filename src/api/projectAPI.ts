import api from '@/lib/axios'
import { dashboardProjectSchema, ProjectFormData } from '@/types/index'
import { isAxiosError } from 'axios'

export async function createProject(formData: ProjectFormData) {
    try {
        const { data } = await api.post('/projects', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.log(error.response.data)
            throw new Error(error.response.data.message)
        }
    }
}

export async function getProjects() {
    try {
        const { data } = await api('/projects')
        const response = dashboardProjectSchema.safeParse(data.data)
        if(response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.log(error.response.data)
            throw new Error(error.response.data.message)
        }
    }
}