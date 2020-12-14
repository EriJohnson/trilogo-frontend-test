import { useState } from 'react'

import { Modal, Button, Form, Row, Input, Select, Upload } from 'antd'

import { PlusOutlined, InboxOutlined } from '@ant-design/icons'

const normFile = e => {
  console.log('Upload event:', e)

  if (Array.isArray(e)) {
    return e
  }

  return e && e.fileList
}

const NewTicket = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  return (
    <>
      <Button
        type='primary'
        onClick={() => setModalVisible(true)}
        size='large'
        shape='round'
        icon={<PlusOutlined />}
      >
        Novo ticket
      </Button>
      <Modal
        title='Novo ticket'
        centered
        visible={isModalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        okText='Criar ticket'
        okType='primary'
        cancelText='Cancelar'
        okButtonProps={{ shape: 'round' }}
        cancelButtonProps={{ disabled: true, size: 'small' }}
        width={472}
        bodyStyle={{ padding: '16px' }}
        footer={null}
      >
        <Form layout='vertical'>
          <Form.Item
            label='Descrição'
            name='description'
            rules={[
              {
                required: true,
                message: 'Por favor, descreva o seu ticket',
              },
            ]}
            colon={false}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Tipo'
            name='type'
            rules={[
              {
                required: true,
                message: 'Por favor, escolha um tipo do seu ticket',
              },
            ]}
            colon={false}
          >
            <Select>
              <Select.Option value='demo'>Procedimento</Select.Option>
              <Select.Option value='demo'>Bem</Select.Option>
              <Select.Option value='demo'>Predial</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label='Responsável'
            name='type'
            rules={[
              {
                required: true,
                message: 'Por favor, atribua um responsável ao ticket',
              },
            ]}
            colon={false}
          >
            <Select>
              <Select.Option value='demo'>Yudi Tadashiro</Select.Option>
              <Select.Option value='demo'>Priscila Alcântara</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label='Imagem' colon={false}>
            <Form.Item
              name='dragger'
              valuePropName='fileList'
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name='files' action='/upload.do'>
                <p className='ant-upload-drag-icon'>
                  <InboxOutlined />
                </p>

                <p className='ant-upload-hint'>
                  Arraste uma imagem para anexar ao ticket
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Row justify='end'>
              <Button
                type='primary'
                htmlType='submit'
                shape='round'
                size='small'
                onClick={() => alert('Ticket criado')}
              >
                Criar ticket
              </Button>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default NewTicket
