/**
 *  Created by pw on 2020/11/14 3:37 下午.
 */
import React, { useState } from 'react';
import './index.less';
import DEMAND_ICON from '@/images/quick/demand.png';
import CALL_ICON from '@/images/quick/call-phone.png';
import BACK_TOP_ICON from '@/images/quick/back-top.png';
import { Tooltip, Dialog, Typography, WithStyles } from '@material-ui/core';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Demand from '@/components/demand';

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: '#E94E38',
    boxShadow: theme.shadows[1],
    fontSize: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
}))(Tooltip);

import MuiDialogContent from '@material-ui/core/DialogContent';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="quick-navigation">
      <ul>
        <li className="quick-li" onClick={handleClickOpen}>
          <img className="quick-icon" src={DEMAND_ICON} />
          <span className="quick-li-text">提需求</span>
        </li>
        <LightTooltip title={'010-8866886'} placement={'left'}>
          <li className="quick-li">
            <img className="quick-icon" src={CALL_ICON} />
            <span className="quick-li-text">联系电话</span>
          </li>
        </LightTooltip>
        <li className="quick-li">
          <img className="quick-icon" src={BACK_TOP_ICON} />
          <span className="quick-li-text">返回顶部</span>
        </li>
      </ul>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          提需求
        </DialogTitle>
        <DialogContent dividers>
          <Demand />
        </DialogContent>
      </Dialog>
    </div>
  );
}
