let fieldsToRemove = [];

const deleteFieldsRecursive = (node) => {
  fieldsToRemove.forEach(fieldToRemove => {
    if (node[fieldToRemove] === '') {
      delete node[fieldToRemove];
    }
  });

  if (typeof node === 'object') {
    Object.values(node).forEach(subNode => {
      deleteFieldsRecursive(subNode);
    })
  }
};

exports.onCreateNode = ({ node }, configOptions) => {
  fieldsToRemove = configOptions.fieldsToRemove;

  if (node.internal.type === 'MarkdownRemark') {
    if (!node.frontmatter) {
      return;
    }

    deleteFieldsRecursive(node);

  }
};