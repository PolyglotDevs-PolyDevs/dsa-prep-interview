// this is an example of how create a tree 
//this is a recursive solution

function TreeNode(value){
    this.value = value
    this.children = [];
}

function binaryTreeNode(value){
    this.value = value 
    this.left = null;
    this.right = null; 
}


function binaryTree(){
    this._root = null;
}

binaryTree.prototype.traversePreOder = function(){
    this.traversePreOderHelper(this._root);
    function traversePreOrderHelper(node){
        if(!node)return
        console.log(node.value);
        traversePreOrderHelper(node.left);
        traversePreOrderHelper(node.right);
    }
} 

//now let's implement it iteractively

binaryTree.prototype.traversePreOder = function(){
    var nodeStack = [];
    nodeStack.push(this._root);
    while(nodeStack.length){
        var node = nodeStack.pop()
        console.log(node)
        if(node.right) nodeStack.push(node.right)
        if(node.left) nodeStack.push(node.left)
    }
}

binaryTree.prototype.traversInOder = function(){
    traverseInOderderHelper(this._root);
    function traverseInOrderHelper(node){
        if(!node)return;
        traverseInOrderHelper(node.left)
        console.log(node.value)
        traverseInOrderHelper(node.right)
    }
}

binaryTree.prototype.traverseInOrderIteractive = function(){
    var current = this._root,
    stack = [],
    done = false;
    while(!done){
        if(current !== null){
            stack.push(current)
            current = current.left
        }else{
            if(stack.length){
                current = stack.pop()
                console.log(current.value);
                current = current.right;
            }else{done = true}
        }
    }
}

binaryTree.prototype.traversePostOrder = function(){
    traverseInOderderHelper(this._root);
    function traverseInOderderHelper(node){
        if(node.left) traverseInOderderHelper(node.left)
        if(node.right) traverseInOderderHelper(node.right)
        console.log(node.value)
    }
}