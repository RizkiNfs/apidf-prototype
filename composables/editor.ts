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

export type Node = ViewNode | TextNode | PageNode

export interface Page extends NodeProps {
  children?: Node[]
  name?: string
}

export interface File {
  children: PageNode[],
  id: string
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

export const useFileState = (fileId: string) => useState<File>('current-file', () => ({
  id: fileId,
  children: [{
    id: nanoid(),
    type: 'page',
    style: { ...initialStyle.view, ...initialStyle.common },
    children: []
  }]
}))

export const useSelectedNode = () => useState<Node>('selected-node')

export const useFileEditor = (fileId?: string) => {
  const route = useRoute()
  const state = useFileState(fileId || route.params.id as string)
  const selectedNode = useSelectedNode()

  return {
    state,
    selectedNode,
    initialStyle
  }
}