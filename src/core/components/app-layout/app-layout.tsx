import { Box } from "@mui/system";
import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import AppNavBar from "../app-navbar/app-navbar";
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import AppDrawer from "../app-drawer/app-drawer";

export default function AppLayout ({children}) {
  const navigate = useNavigate();
  //  @ts-ignore. @ts-expect-error.
  const { currentUser } = useSelector(s => s.user);
  const [menu, setMenu] = React.useState(false);

  React.useEffect(() => {
    if(!currentUser) return navigate('/login')
  }, [])

  const handleDrawerToggle = () => setMenu(!menu)

  if(!currentUser) return null
  
  return (
        <Grid container height={'100vh'}>
          <Box className="w-full flex" sx={{ justifyContent: 'center', flexDirection: 'column' }}>
          {/* <Notification /> */}
          <AppNavBar handleDrawerToggle={handleDrawerToggle} />
          {/* config={config} handleDrawerToggle={handleDrawerToggle} /> */}
          {/* <TemporaryDrawer open={menu} setOpen={setMenu} /> */}
          <AppDrawer children={children} open={menu} setOpen={setMenu} />
          <Grid container sx={{ height: 'calc(100vh - 70px)', overflow: 'auto' }}>
            <Box className="w-full flex" sx={{ flexDirection: 'column' }}>
             <Routes>
              {children?.length && children.map(i => <Route key={i.path} element={<>{i.component({ children: i.children })}</>} path={i.path} />)}
             </Routes>
            </Box>
          </Grid>
           </Box>
        </Grid>
  )
}