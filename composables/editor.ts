import type { Style } from '@react-pdf/types'
import { nanoid } from 'nanoid'

interface NodeProps {
  style: Style
  id:  string
  name?:  string
}

export interface ViewNode extends NodeProps {
  type: 'view'
  children?: Node[]
}

export interface PageNode extends NodeProps {
  type: 'page'
  children: Node[]
}

export interface TextNode extends NodeProps {
  type: 'text'
  children?: string
}

export interface ListNode extends NodeProps {
  type: 'list'
  children?: Node[]
  dataSource: string
}

export interface ImageNode extends NodeProps {
  type: 'image'
  src: string
  children?: string
}

export type Node = ViewNode
  | TextNode
  | PageNode
  | ListNode
  | ImageNode

export interface Page extends NodeProps {
  children?: Node[]
  name?: string
}

export interface File {
  children: PageNode[],
  id: string
  exampleData: string
}

const initialStyle = {
  common: {
  },
  view: {
    display: 'flex', 
    flexDirection: 'column',
  },
  text: {
    fontSize: '16px',
    lineHeight: 1.5,
  }
  
} satisfies Record<'common'|'view'|'text',Style>

export const exampleData =`
{
  "data": {
    "date": "1 Jan 2021",
    "billedTo": {
      "name:": "John Doe",
      "address": "123 Main St",
      "city": "Springfield",
      "email": "jhon@mail.com"
    },
    "invoiceId": "iv-123",
    "items": [
      {
        "id": "1",
        "name": "egg",
        "quantity": "10",
        "unitPrice": "100",
        "total": "1000"
      },
      {
        "id": "2",
        "name": "bread",
        "quantity": "5",
        "unitPrice": "50",
        "total": "250"
      },
      {
        "id": "3",
        "name": "milk",
        "quantity": "2",
        "unitPrice": "20",
        "total": "40"
      }
    ],
    "total": "1290"
  }
}
`
export const useFileState = (fileId: string) => useState<File>('current-file', () => ({
  id: fileId,
  exampleData,
  children: [{
    id: nanoid(),
    type: 'page',
    style: { ...initialStyle.view, ...initialStyle.common },
    children: []
  }]
}))

export const useSelectedNode = () => useState<Node>('selected-node')
export const useParentSelectedNode = () => useState<Node>('parent-selected-node')

export const useFileEditor = (fileId?: string) => {
  const route = useRoute()
  const state = useFileState(fileId || route.params.id as string)
  const selectedNode = useSelectedNode()
  const parentSelectedNode = useParentSelectedNode()

  const setSelectedNode = (node: Node, parentNode?: Node) => {
    selectedNode.value = node
    if(parentNode) {
      parentSelectedNode.value = parentNode
    }
  }

  const deleteSelectedNode = () => {
    if(!parentSelectedNode.value) {
      return
    }
    const parent = parentSelectedNode.value as ViewNode
    parent.children = parent.children?.filter(child => child.id !== selectedNode.value.id)
    selectedNode.value = parent
  }

  return {
    state,
    selectedNode,
    initialStyle,
    parentSelectedNode,
    setSelectedNode,
    deleteSelectedNode
  }
}