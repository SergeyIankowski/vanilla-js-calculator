const addClickCallbackToNode = (node, selectorName, callback) => {
    return node.querySelector(selectorName).addEventListener('click', callback)
}
export default addClickCallbackToNode
