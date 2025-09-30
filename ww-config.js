export default {
  editor: {
    label: {
      en: 'Timezone Select',
      pt: 'Seletor de Fuso Horário'
    },
    icon: 'globe'
  },
  properties: {
    initialValue: {
      label: {
        en: 'Initial value',
        pt: 'Valor inicial'
      },
      type: 'Text',
      bindable: true,
      section: 'settings',
      defaultValue: Intl.DateTimeFormat().resolvedOptions().timeZone,
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing the timezone value (e.g., "America/Sao_Paulo")',
      },
      propertyHelp: {
        tooltip: 'The initial timezone value to be selected. Defaults to user\'s browser timezone',
      },
      /* wwEditor:end */
    },
    placeholder: {
      label: {
        en: 'Placeholder',
        pt: 'Placeholder'
      },
      type: 'Text',
      bindable: true,
      section: 'settings',
      defaultValue: 'Select timezone',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string to display when no timezone is selected',
      },
      propertyHelp: {
        tooltip: 'Text to display when no timezone is selected',
      },
      /* wwEditor:end */
    },
    backgroundColor: {
      label: {
        en: 'Background color',
        pt: 'Cor de fundo'
      },
      type: 'Color',
      bindable: true,
      section: 'style',
      defaultValue: '#FFFFFF',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing a color (e.g., "#FFFFFF")',
      },
      propertyHelp: {
        tooltip: 'The background color of the select field',
      },
      /* wwEditor:end */
    },
    textColor: {
      label: {
        en: 'Text color',
        pt: 'Cor do texto'
      },
      type: 'Color',
      bindable: true,
      section: 'style',
      defaultValue: '#333333',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing a color (e.g., "#333333")',
      },
      propertyHelp: {
        tooltip: 'The color of the text in the select field',
      },
      /* wwEditor:end */
    },
    borderColor: {
      label: {
        en: 'Border color',
        pt: 'Cor da borda'
      },
      type: 'Color',
      bindable: true,
      section: 'style',
      defaultValue: '#CCCCCC',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing a color (e.g., "#CCCCCC")',
      },
      propertyHelp: {
        tooltip: 'The color of the border around the select field',
      },
      /* wwEditor:end */
    },
    highlightColor: {
      label: {
        en: 'Highlight color',
        pt: 'Cor de destaque'
      },
      type: 'Color',
      bindable: true,
      section: 'style',
      defaultValue: '#E6F2FF',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing a color (e.g., "#E6F2FF")',
      },
      propertyHelp: {
        tooltip: 'The background color of the selected option',
      },
      /* wwEditor:end */
    },
    brazilTextColor: {
      label: {
        en: 'Brazil timezone text color',
        pt: 'Cor do texto dos fusos do Brasil'
      },
      type: 'Color',
      bindable: true,
      section: 'style',
      defaultValue: '#006400',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing a color (e.g., "#006400")',
      },
      propertyHelp: {
        tooltip: 'The text color for Brazilian timezones',
      },
      /* wwEditor:end */
    },
    brazilBackgroundColor: {
      label: {
        en: 'Brazil timezone background color',
        pt: 'Cor de fundo dos fusos do Brasil'
      },
      type: 'Color',
      bindable: true,
      section: 'style',
      defaultValue: 'rgba(0, 100, 0, 0.05)',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing a color (e.g., "rgba(0, 100, 0, 0.05)")',
      },
      propertyHelp: {
        tooltip: 'The background color for Brazilian timezones',
      },
      /* wwEditor:end */
    },
    brazilHoverBackgroundColor: {
      label: {
        en: 'Brazil timezone hover color',
        pt: 'Cor de hover dos fusos do Brasil'
      },
      type: 'Color',
      bindable: true,
      section: 'style',
      defaultValue: 'rgba(0, 100, 0, 0.1)',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing a color (e.g., "rgba(0, 100, 0, 0.1)")',
      },
      propertyHelp: {
        tooltip: 'The background color for Brazilian timezones on hover',
      },
      /* wwEditor:end */
    }
  },
  triggerEvents: [
    {
      name: 'change',
      label: { 
        en: 'On change',
        pt: 'Ao mudar'
      },
      event: { value: '' },
      default: true
    },
    {
      name: 'initValueChange',
      label: { 
        en: 'On init value change',
        pt: 'Ao mudar valor inicial'
      },
      event: { value: '' }
    }
  ]
};