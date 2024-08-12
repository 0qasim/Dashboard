import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import Topnav from './Topnav'
import Sidenav from './Sidenav'
import SideDrawer from './SideDrawer'

const DashboardLayout = ({title,children}) => {
  const {isOpen ,onClose,onOpen}=useDisclosure();
    return (
    <div>
 <Flex>
      <Box 
            display={{
                base:"none",
                 lg:"flex", 
                }}
        >  <Sidenav /></Box>
       <SideDrawer  isOpen={isOpen} onClose={onClose}/>
        <Box flexGrow={1}>
          <Topnav onOpen={onOpen} title={title}/>
          <Container mt={6} maxW="70rem">{children}</Container>
        </Box>
      </Flex>



    </div>
  )
}

export default DashboardLayout