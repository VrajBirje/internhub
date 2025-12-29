import React from 'react'

const NotificationItem: React.FC<{ text?: string }> = ({ text = 'Notification text' }) => (
  <div style={{padding:8, borderBottom:'1px solid #f0f0f0'}}>{text}</div>
)

export default NotificationItem
