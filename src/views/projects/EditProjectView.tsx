import { Navigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProjectById } from '@/api/projectAPI'
import EditProjectForm from '@/components/projects/EditProjectForm'

export default function EditProjectView() {

  const params = useParams()
  const projectId = params.projectId!

  const { data, isLoading, isError } = useQuery({
    queryKey: ['editProject', projectId],
    queryFn: () => getProjectById(projectId),
    retry: false
  })
  
  console.log(isLoading)
  console.log(data)
  console.log(isError)
  
  if(isLoading) return 'Cargando...'
  if(isError) return <Navigate to='/404' />

  if(data) return <EditProjectForm />
}