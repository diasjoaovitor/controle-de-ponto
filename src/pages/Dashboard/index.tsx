import { DataGrid } from '@mui/x-data-grid'
import { Layout } from '../../shared/components'
import { employees } from '../../repositories'
import { columns, localeText } from './data-grid'

export const Dashboard: React.FC = () => {
  return (
    <Layout page="Dashboard">
      <DataGrid
        rows={employees} columns={columns}
        autoHeight
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        localeText={localeText}
      />
    </Layout>
  )
}
