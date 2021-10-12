import React from 'react'
import { Modal } from 'antd'
import { IAccountModal } from 'typings/accountsManage'

const AccountModal = (props: IAccountModal) => {
  return <Modal {...props} />
}

export default AccountModal
