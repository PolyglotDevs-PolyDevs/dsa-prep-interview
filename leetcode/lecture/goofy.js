function TreeNode(value){
    this.value = value;
    this.children = [];
}

function BinaryTreeNode(value){
    this.value = value;
    this.left  = null; 
    this.right = null;
}

function BinaryTree(){
    this._root = null;
}

//time to tree traversal 

// #pre-order traversal (top, left,right) 

BinaryTree.prototype.traversePreOder = function(){
    traversePreOrderHelper(this._root);
    function traversePreOrderHelper(node){
        if(!node) return;
        console.log(node.value);
        traverserPreOrderHelper(node.left);
        traversePreOrderHelper(node.right);
    }
}

        
    }
}