import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { LaunchStatusChip } from 'components/LaunchStatusChip';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Box from '@mui/material/Box';
import React from 'react';
import nasaIcon from 'assets/nasa-icon.png';
import wikipediaIcon from 'assets/wikipedia-icon.png';
import youtubeIcon from 'assets/youtube-icon.png';

const SocialLink = ({ src, href }: { src: string; href: string }) => {
  return (
    <a href={href}>
      <Box width="15px" height="15px" component={'img'} src={src} />
    </a>
  );
};

const ModalHeader = (props: any) => {
  const { flightDetail } = props;
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
      <Grid xs={6} sm={6} md={6}>
        <Grid container spacing={1}>
          <Grid item xs={4} sm={4} md={4}>
            <img
              height="50px"
              width="50px"
              src={flightDetail?.links?.mission_patch_small}
              alt="image"
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={1}>
              <Typography variant="caption">{flightDetail?.mission_name}</Typography>
              <Typography variant="caption">{flightDetail?.rocket?.rocket_name}</Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={1}>
                {flightDetail?.links?.article_link && (
                  <SocialLink src={nasaIcon} href={flightDetail?.links?.article_link} />
                )}
                {flightDetail?.link?.wikipedia && (
                  <SocialLink src={wikipediaIcon} href={flightDetail?.link?.wikipedia} />
                )}
                {flightDetail?.links?.video_link && (
                  <SocialLink src={youtubeIcon} href={flightDetail?.links?.video_link} />
                )}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <LaunchStatusChip
              upcoming={flightDetail.upcoming}
              status={flightDetail.launch_success}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={6} sm={6} md={6}>
        <CloseRoundedIcon onClick={props.handleClose} />
      </Grid>
    </Stack>
  );
};

export default ModalHeader;
