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
    searchPlaceholder: {
      label: {
        en: 'Search placeholder',
        pt: 'Placeholder de busca'
      },
      type: 'Text',
      bindable: true,
      section: 'settings',
      defaultValue: 'Search timezone...',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string to display in the search input field',
      },
      propertyHelp: {
        tooltip: 'Text to display in the search input when searching for timezones',
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
    },
    fontFamily: {
      label: {
        en: 'Font family',
        pt: 'Família da fonte'
      },
      type: 'TextSelect',
      bindable: true,
      section: 'style',
      options: {
        choices: [
          { value: 'default', label: 'Default' },
          { value: 'Arial, sans-serif', label: 'Arial' },
          { value: 'Helvetica, sans-serif', label: 'Helvetica' },
          { value: 'Georgia, serif', label: 'Georgia' },
          { value: 'Times New Roman, serif', label: 'Times New Roman' },
          { value: 'Courier New, monospace', label: 'Courier New' },
          { value: 'Verdana, sans-serif', label: 'Verdana' },
          { value: 'Tahoma, sans-serif', label: 'Tahoma' },
          { value: 'Trebuchet MS, sans-serif', label: 'Trebuchet MS' },
          { value: 'Comic Sans MS, cursive', label: 'Comic Sans MS' },
          { value: 'Impact, sans-serif', label: 'Impact' },
          { value: 'Lucida Console, monospace', label: 'Lucida Console' },
          { value: 'inherit', label: 'Inherit' }
        ]
      },
      defaultValue: 'default',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing a font family (e.g., "Arial, sans-serif")',
      },
      propertyHelp: {
        tooltip: 'The font family of the text',
      },
      /* wwEditor:end */
    },
    fontSize: {
      label: {
        en: 'Font size',
        pt: 'Tamanho da fonte'
      },
      type: 'Length',
      bindable: true,
      section: 'style',
      defaultValue: '14px',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing a size (e.g., "14px", "1rem")',
      },
      propertyHelp: {
        tooltip: 'The font size of the text',
      },
      /* wwEditor:end */
    },
    fontWeight: {
      label: {
        en: 'Font weight',
        pt: 'Peso da fonte'
      },
      type: 'TextSelect',
      bindable: true,
      section: 'style',
      options: {
        choices: [
          { value: '100', label: '100 - Thin' },
          { value: '200', label: '200 - Extra Light' },
          { value: '300', label: '300 - Light' },
          { value: '400', label: '400 - Normal' },
          { value: '500', label: '500 - Medium' },
          { value: '600', label: '600 - Semi Bold' },
          { value: '700', label: '700 - Bold' },
          { value: '800', label: '800 - Extra Bold' },
          { value: '900', label: '900 - Black' }
        ]
      },
      defaultValue: '400',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing font weight (e.g., "400", "700")',
      },
      propertyHelp: {
        tooltip: 'The font weight of the text',
      },
      /* wwEditor:end */
    },
    borderRadius: {
      label: {
        en: 'Border radius',
        pt: 'Raio da borda'
      },
      type: 'Length',
      bindable: true,
      section: 'style',
      defaultValue: '4px',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing a size (e.g., "4px", "0.5rem")',
      },
      propertyHelp: {
        tooltip: 'The border radius of the select field',
      },
      /* wwEditor:end */
    },
    borderWidth: {
      label: {
        en: 'Border width',
        pt: 'Espessura da borda'
      },
      type: 'Length',
      bindable: true,
      section: 'style',
      defaultValue: '1px',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing a size (e.g., "1px", "2px")',
      },
      propertyHelp: {
        tooltip: 'The border width of the select field',
      },
      /* wwEditor:end */
    },
    padding: {
      label: {
        en: 'Padding',
        pt: 'Espaçamento interno'
      },
      type: 'Length',
      bindable: true,
      section: 'style',
      defaultValue: '10px 12px',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing padding (e.g., "10px 12px")',
      },
      propertyHelp: {
        tooltip: 'The padding inside the select field',
      },
      /* wwEditor:end */
    },
    minHeight: {
      label: {
        en: 'Min height',
        pt: 'Altura mínima'
      },
      type: 'Length',
      bindable: true,
      section: 'style',
      defaultValue: '42px',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing a size (e.g., "42px")',
      },
      propertyHelp: {
        tooltip: 'The minimum height of the select field',
      },
      /* wwEditor:end */
    },
    dropdownMaxHeight: {
      label: {
        en: 'Dropdown max height',
        pt: 'Altura máxima do dropdown'
      },
      type: 'Length',
      bindable: true,
      section: 'style',
      defaultValue: '400px',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string representing a size (e.g., "400px")',
      },
      propertyHelp: {
        tooltip: 'The maximum height of the dropdown menu',
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