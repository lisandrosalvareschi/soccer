import React from "react";
import { Grid, Avatar, Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import VerifiedIcon from '@mui/icons-material/Verified';

import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';
import EditIcon from '@mui/icons-material/Edit';
import { formatDistance, parseISO } from "date-fns";
import { Chip } from "@material-ui/core";
import Body from "../component/Body";
import {useState, useEffect} from 'react';

export default function Profile () {
  const [dataUser, setDataUser] = useState({
    imageProfile: '',
    firstName: '',
    lastName: '',
    documentType: '',
    document: '',
    created: '',
    lastUpdated: '',
    email: '',
    address: '',
    categoryId: ''
  });

  // @ts-ignore. @ts-expect-error.
  const {currentUser} = useSelector(s => s.user);


  useEffect(() => {
    setTimeout(() => {
      if(currentUser) return setDataUser(currentUser)
    }, 10000);
  }, [currentUser])

  return (
    <Grid container>
          <Paper className="w-full my-10px mx-10px p-20px flex" style={{backgroundColor: 'rgba(0,0,240,.5)'}}>
            <Grid item width={220} height={220} position={"relative"} marginRight={2} >
              {!dataUser.imageProfile ? 
                <Skeleton variant="circular" width="inherit" height="inherit" />
                : (
                  <>
                    <Avatar sx={{ width: "inherit", height: "inherit" }} src={dataUser.imageProfile} /> 
                    <VerifiedIcon sx={{position: 'absolute', bottom: 15, right: 0, width: 50, height: 50, color: "white"}} />
                  </>
                )
              }
            </Grid>
            <Grid item sx={{ width: 'calc(100% - 590px)', color: 'white' }} flexDirection={'column'} className="flex flex-col justify-end items-start px-30px mx-15px">
              <Grid item className="flex gap-10px" style={{ flexDirection: 'column', alignItems: 'center' }}>
                {!dataUser.firstName && !dataUser.lastName ? 
                  <Skeleton variant="rectangular" width="30rem" height="3rem" /> 
                  : <Typography variant="h4" style={{ width: 'max-content', maxWidth: '30rem' }} textTransform='uppercase' fontWeight={900}>{dataUser.firstName + ' ' + dataUser.lastName}</Typography>
                }
                {!dataUser.documentType && !dataUser.document ? 
                  <Skeleton variant="rectangular" width="20rem" height="2rem" /> 
                  : <Typography variant="h5" fontWeight={400}>{dataUser.documentType + ' ' + dataUser.document}</Typography>
                }
                {!dataUser.categoryId ? 
                  <Skeleton width="20rem" height="2rem" variant="rectangular" /> 
                  : <Chip label="Categoría 1" style={{ width: '20rem', fontSize: '1.2rem', fontWeight: 500, color: 'white', borderColor: 'white', textTransform: 'uppercase' }} variant="outlined" />

                }
              </Grid>
            </Grid>
            <Grid item sx={{ width: 'max-content', maxWidth: '300px', color: 'white', height: 'max-content', marginTop: 'auto', flexDirection: 'column', alignItems: "flex-start", gap: 1.2 }} className="flex">
              <Grid item sx={{ gap: 1, display: 'flex', fontWeight: 200}}>
                {!dataUser.email ? 
                  <Skeleton variant="rectangular" width="20rem" height="1.5rem" /> : (
                    <>
                      <EmailIcon sx={{opacity: .7, width: '1.2rem'}} />
                      {dataUser.email}
                    </>
                  )
                }
              </Grid>
              <Grid item sx={{ gap: 1, display: 'flex', fontWeight: 200}}>
                {!dataUser.address ? 
                  <Skeleton variant="rectangular" width="20rem" height="1.5rem" /> : (
                    <>
                      <LocationOnIcon sx={{opacity: .7, width: '1.2rem'}} />
                      {dataUser.address}
                    </>
                  )
                }
              </Grid>
              <Grid item sx={{ gap: 1, display: 'flex', fontWeight: 200}}>
                {!dataUser.created ? 
                  <Skeleton variant="rectangular" width="20rem" height="1.5rem" /> : (
                    <>
                      <TodayIcon sx={{opacity: .7, width: '1.2rem'}} />
                      Created {formatDistance(parseISO(dataUser.created), new Date(), { addSuffix: true })}
                    </>
                  )
                }
              </Grid>
              <Grid item sx={{ gap: 1, display: 'flex', fontWeight: 200}}>
                {!dataUser.lastUpdated ? 
                  <Skeleton variant="rectangular" width="20rem" height="1.5rem" /> : (
                    <>
                      <EditIcon sx={{opacity: .7, width: '1.2rem'}} />
                      Last updated {formatDistance(parseISO(dataUser.lastUpdated), new Date(), { addSuffix: true })}
                    </>
                  )
                }
              </Grid>
            </Grid>
          </Paper>

          {/* nav */}
          <Body />
    </Grid>
  )
}