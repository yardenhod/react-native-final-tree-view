import React from 'react'
import {ViewStyle} from 'react-native'

interface NodeAction<DataType> {
  node: DataType
  level: number
}

interface RenderNodeProps<DataType> extends NodeAction<DataType> {
  isExpanded: boolean
  hasChildrenNodes: boolean
}

interface Props<DataType> {
  data: DataType[]
  renderNode: React.ElementType<RenderNodeProps<DataType>>
  initialExpanded: boolean
  getCollapsedNodeHeight?: (args: NodeAction<DataType>) => ViewStyle['height']
  idKey?: string
  activeOpacityNode?: number
  childrenKey?: string
  onNodePress?: (
    args: NodeAction<DataType>
  ) => void | boolean | Promise<boolean> | Promise<void>
  onNodeLongPress?: (args: NodeAction<DataType>) => number
  isNodeExpanded?: (args: DataType) => boolean,
  shouldDisableTouchOnLeaf?: (args: NodeAction<DataType>) => boolean
}

export default class TreeView<DataType> extends React.Component<
  Props<DataType>
> {}
