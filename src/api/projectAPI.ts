import api from '@/lib/axios'
import { ProjectFormData } from '@/types/index'

export async function createProject(formData: ProjectFormData) {
    
    try {
        const { data } = await api.post('/projects', formData)
        
    } catch (error) {
        console.error(error)
    }
}