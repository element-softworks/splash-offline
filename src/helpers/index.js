export const pascalCase = str =>
    str?.replace(/(^\w|-\w)/g, g => g?.replace(/-/, '')?.toUpperCase()) ?? '';
