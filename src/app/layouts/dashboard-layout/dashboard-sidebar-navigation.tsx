import React, { useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

// Structural Analysis
// - CSS classes and its implementation
// - Alternative to <Route>
// - State management
// - Drawer with Toolbar/AppBar items
// - Link on the Toolbar/AppBar

const DashboardSidebarNavigation = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();

  useEffect(() => {}, []);

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <Toolbar
          style={{ width: '6rem', height: 'auto' }}
          className={classes.toolbar}
        >
          <Link to={`${url}`} className={classes.logoWithLink}>
            Logo
          </Link>
        </Toolbar>
      </Drawer>
    </div>
  );
};

const drawerWidth = 240;
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
    },
    logoWithLink: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
    },
  }),
);

export default DashboardSidebarNavigation;
