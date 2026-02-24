import * as React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
  Menu
} from '@mui/material'

import SchoolIcon from '@mui/icons-material/School'

import { useNavigate, useLocation } from 'react-router'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Courses', path: '/dashboard/courses' },
    { text: 'Students', path: '/students' },
    { text: 'Rooms', path: '/dashboard/rooms' },
    { text: 'Date Sheet', path: '/dashboard/datesheet' },
    { text: 'Seat Plan', path: '/dashboard/seatplan' },
    { text: 'Login', path: '/login' },
    { text: 'Register', path: '/register' },
  ]

  const isActive = (path) => location.pathname === path

  const handleNavigate = (path) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <>
      {/* ================= APP BAR ================= */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backdropFilter: 'blur(10px)',
          background: 'rgba(255,255,255,0.15)',
          borderBottom: '1px solid rgba(255,255,255,0.3)',
          color: '#000'
        }}
      >
        <Toolbar>

          {/* LEFT: LOGO + TITLE */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/dashboard')}
          >
            <SchoolIcon sx={{ fontSize: 32, mr: 1 }} />

            <Box>
              <Typography fontWeight="bold" lineHeight={1.2}>
                ExamPortal
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Admin Portal
              </Typography>
            </Box>
          </Box>

          {/* SPACER */}
          <Box sx={{ flexGrow: 1 }} />

          {/* MOBILE MENU ICON */}
          <IconButton
            sx={{ display: { md: 'none' } }}
            onClick={() => setOpen(true)}
          >
            <Menu />
          </IconButton>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{
                  color: isActive(item.path) ? '#1976d2' : '#000',
                  fontWeight: isActive(item.path) ? 'bold' : 'normal',
                  borderBottom: isActive(item.path)
                    ? '2px solid #1976d2'
                    : '2px solid transparent',
                  borderRadius: 0
                }}
              >
                {item.text}
              </Button>
            ))}

            <Button
              onClick={() => navigate('/settings')}
              sx={{
                color: isActive('/settings') ? '#1976d2' : '#000',
                borderBottom: isActive('/settings')
                  ? '2px solid #1976d2'
                  : '2px solid transparent',
                borderRadius: 0
              }}
            >
              Settings
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ================= DRAWER (MOBILE) ================= */}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: { md: 'none' },
          '& .MuiDrawer-paper': {
            width: 260,
            backgroundColor: '#fff'
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* Drawer Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SchoolIcon sx={{ mr: 1 }} />
            <Box>
              <Typography fontWeight="bold">ExamPortal</Typography>
              <Typography variant="caption">Admin Portal</Typography>
            </Box>
          </Box>

          <Divider />

          {/* Drawer Menu */}
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => handleNavigate(item.path)}>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      color: isActive(item.path) ? 'primary' : 'text.primary',
                      fontWeight: isActive(item.path) ? 'bold' : 'normal'
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigate('/settings')}>
                <ListItemText
                  primary="Settings"
                  primaryTypographyProps={{
                    color: isActive('/settings') ? 'primary' : 'text.primary',
                    fontWeight: isActive('/settings') ? 'bold' : 'normal'
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Header
