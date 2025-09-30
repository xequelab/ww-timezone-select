<template>
  <div class="timezone-select" ref="selectContainer">
    <div
      class="timezone-select__selected"
      @click="toggleDropdown"
      :style="{
        borderColor: content.borderColor,
        borderWidth: content.borderWidth,
        backgroundColor: content.backgroundColor,
        color: content.textColor,
        fontSize: content.fontSize,
        borderRadius: content.borderRadius,
        padding: content.padding,
        minHeight: content.minHeight,
        fontWeight: content.fontWeight
      }"
    >
      <span v-if="selectedTimezone">{{ selectedTimezone.label }}</span>
      <span v-else class="timezone-select__placeholder">{{ content.placeholder || 'Select timezone' }}</span>
      <div class="timezone-select__arrow" :class="{ 'timezone-select__arrow--open': isOpen }">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    
    <div v-if="isOpen" class="timezone-select__dropdown" :style="{ borderColor: content.borderColor, borderWidth: content.borderWidth, borderRadius: content.borderRadius, maxHeight: content.dropdownMaxHeight }">
      <div class="timezone-select__search">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search timezone..."
          @click.stop
          :style="{ borderColor: content.borderColor, borderWidth: content.borderWidth, borderRadius: content.borderRadius, fontSize: content.fontSize }"
        />
      </div>
      
      <div class="timezone-select__options">
        <template v-for="(continent, continentIndex) in filteredTimezones" :key="continentIndex">
          <div class="timezone-select__continent" v-if="continent.timezones.length > 0">
            <div class="timezone-select__continent-name">{{ continent.name }}</div>
            <div 
              v-for="(timezone, timezoneIndex) in continent.timezones" 
              :key="`${continentIndex}-${timezoneIndex}`"
              class="timezone-select__option"
              :class="{
                'timezone-select__option--selected': selectedValue === timezone.value,
                'timezone-select__option--brazil': timezone.isBrazil
              }"
              @click.stop="selectTimezone(timezone)"
              :style="getOptionStyle(timezone)"
            >
              {{ timezone.label }}
              <span class="timezone-select__option-offset">{{ timezone.offset }}</span>
            </div>
          </div>
        </template>
        <div v-if="noResults" class="timezone-select__no-results">
          No timezones found
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';

export default {
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  
  emits: ['trigger-event'],
  
  setup(props, { emit }) {
    // Editor state
    const isEditing = computed(() => {
      /* wwEditor:start */
      return props.wwEditorState.isEditing;
      /* wwEditor:end */
      // eslint-disable-next-line no-unreachable
      return false;
    });
    
    // Component state
    const isOpen = ref(false);
    const searchQuery = ref('');
    const selectContainer = ref(null);
    
    // Internal value
    const { value: selectedValue, setValue: setSelectedValue } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: 'value',
      type: 'string',
      defaultValue: computed(() => props.content.initialValue || ''),
    });
    
    // Timezone data
    const timezones = computed(() => {
      return [
        {
          name: 'Africa',
          timezones: [
            { value: 'Africa/Abidjan', label: 'Abidjan', offset: '(GMT+0)', isBrazil: false },
            { value: 'Africa/Accra', label: 'Accra', offset: '(GMT+0)', isBrazil: false },
            { value: 'Africa/Cairo', label: 'Cairo', offset: '(GMT+2)', isBrazil: false },
            { value: 'Africa/Casablanca', label: 'Casablanca', offset: '(GMT+1)', isBrazil: false },
            { value: 'Africa/Johannesburg', label: 'Johannesburg', offset: '(GMT+2)', isBrazil: false },
            { value: 'Africa/Lagos', label: 'Lagos', offset: '(GMT+1)', isBrazil: false },
            { value: 'Africa/Nairobi', label: 'Nairobi', offset: '(GMT+3)', isBrazil: false },
            { value: 'Africa/Tunis', label: 'Tunis', offset: '(GMT+1)', isBrazil: false },
          ]
        },
        {
          name: 'America',
          timezones: [
            { value: 'America/Anchorage', label: 'Anchorage', offset: '(GMT-9)', isBrazil: false },
            { value: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires', offset: '(GMT-3)', isBrazil: false },
            { value: 'America/Araguaina', label: 'Araguaina', offset: '(GMT-3)', isBrazil: true },
            { value: 'America/Bahia', label: 'Bahia', offset: '(GMT-3)', isBrazil: true },
            { value: 'America/Belem', label: 'Belem', offset: '(GMT-3)', isBrazil: true },
            { value: 'America/Bogota', label: 'Bogota', offset: '(GMT-5)', isBrazil: false },
            { value: 'America/Caracas', label: 'Caracas', offset: '(GMT-4)', isBrazil: false },
            { value: 'America/Chicago', label: 'Chicago', offset: '(GMT-6)', isBrazil: false },
            { value: 'America/Cuiaba', label: 'Cuiaba', offset: '(GMT-4)', isBrazil: true },
            { value: 'America/Denver', label: 'Denver', offset: '(GMT-7)', isBrazil: false },
            { value: 'America/Fortaleza', label: 'Fortaleza', offset: '(GMT-3)', isBrazil: true },
            { value: 'America/Halifax', label: 'Halifax', offset: '(GMT-4)', isBrazil: false },
            { value: 'America/Lima', label: 'Lima', offset: '(GMT-5)', isBrazil: false },
            { value: 'America/Los_Angeles', label: 'Los Angeles', offset: '(GMT-8)', isBrazil: false },
            { value: 'America/Maceio', label: 'Maceio', offset: '(GMT-3)', isBrazil: true },
            { value: 'America/Manaus', label: 'Manaus', offset: '(GMT-4)', isBrazil: true },
            { value: 'America/Mexico_City', label: 'Mexico City', offset: '(GMT-6)', isBrazil: false },
            { value: 'America/Montevideo', label: 'Montevideo', offset: '(GMT-3)', isBrazil: false },
            { value: 'America/New_York', label: 'New York', offset: '(GMT-5)', isBrazil: false },
            { value: 'America/Noronha', label: 'Noronha', offset: '(GMT-2)', isBrazil: true },
            { value: 'America/Phoenix', label: 'Phoenix', offset: '(GMT-7)', isBrazil: false },
            { value: 'America/Porto_Velho', label: 'Porto Velho', offset: '(GMT-4)', isBrazil: true },
            { value: 'America/Recife', label: 'Recife', offset: '(GMT-3)', isBrazil: true },
            { value: 'America/Rio_Branco', label: 'Rio Branco', offset: '(GMT-5)', isBrazil: true },
            { value: 'America/Santiago', label: 'Santiago', offset: '(GMT-4)', isBrazil: false },
            { value: 'America/Sao_Paulo', label: 'São Paulo', offset: '(GMT-3)', isBrazil: true },
            { value: 'America/Toronto', label: 'Toronto', offset: '(GMT-5)', isBrazil: false },
            { value: 'America/Vancouver', label: 'Vancouver', offset: '(GMT-8)', isBrazil: false },
          ]
        },
        {
          name: 'Asia',
          timezones: [
            { value: 'Asia/Bangkok', label: 'Bangkok', offset: '(GMT+7)', isBrazil: false },
            { value: 'Asia/Dubai', label: 'Dubai', offset: '(GMT+4)', isBrazil: false },
            { value: 'Asia/Hong_Kong', label: 'Hong Kong', offset: '(GMT+8)', isBrazil: false },
            { value: 'Asia/Jakarta', label: 'Jakarta', offset: '(GMT+7)', isBrazil: false },
            { value: 'Asia/Jerusalem', label: 'Jerusalem', offset: '(GMT+2)', isBrazil: false },
            { value: 'Asia/Kolkata', label: 'Kolkata', offset: '(GMT+5:30)', isBrazil: false },
            { value: 'Asia/Kuala_Lumpur', label: 'Kuala Lumpur', offset: '(GMT+8)', isBrazil: false },
            { value: 'Asia/Manila', label: 'Manila', offset: '(GMT+8)', isBrazil: false },
            { value: 'Asia/Seoul', label: 'Seoul', offset: '(GMT+9)', isBrazil: false },
            { value: 'Asia/Shanghai', label: 'Shanghai', offset: '(GMT+8)', isBrazil: false },
            { value: 'Asia/Singapore', label: 'Singapore', offset: '(GMT+8)', isBrazil: false },
            { value: 'Asia/Taipei', label: 'Taipei', offset: '(GMT+8)', isBrazil: false },
            { value: 'Asia/Tokyo', label: 'Tokyo', offset: '(GMT+9)', isBrazil: false },
          ]
        },
        {
          name: 'Australia',
          timezones: [
            { value: 'Australia/Adelaide', label: 'Adelaide', offset: '(GMT+9:30)', isBrazil: false },
            { value: 'Australia/Brisbane', label: 'Brisbane', offset: '(GMT+10)', isBrazil: false },
            { value: 'Australia/Melbourne', label: 'Melbourne', offset: '(GMT+10)', isBrazil: false },
            { value: 'Australia/Perth', label: 'Perth', offset: '(GMT+8)', isBrazil: false },
            { value: 'Australia/Sydney', label: 'Sydney', offset: '(GMT+10)', isBrazil: false },
          ]
        },
        {
          name: 'Europe',
          timezones: [
            { value: 'Europe/Amsterdam', label: 'Amsterdam', offset: '(GMT+1)', isBrazil: false },
            { value: 'Europe/Athens', label: 'Athens', offset: '(GMT+2)', isBrazil: false },
            { value: 'Europe/Berlin', label: 'Berlin', offset: '(GMT+1)', isBrazil: false },
            { value: 'Europe/Brussels', label: 'Brussels', offset: '(GMT+1)', isBrazil: false },
            { value: 'Europe/Budapest', label: 'Budapest', offset: '(GMT+1)', isBrazil: false },
            { value: 'Europe/Copenhagen', label: 'Copenhagen', offset: '(GMT+1)', isBrazil: false },
            { value: 'Europe/Dublin', label: 'Dublin', offset: '(GMT+0)', isBrazil: false },
            { value: 'Europe/Helsinki', label: 'Helsinki', offset: '(GMT+2)', isBrazil: false },
            { value: 'Europe/Istanbul', label: 'Istanbul', offset: '(GMT+3)', isBrazil: false },
            { value: 'Europe/Lisbon', label: 'Lisbon', offset: '(GMT+0)', isBrazil: false },
            { value: 'Europe/London', label: 'London', offset: '(GMT+0)', isBrazil: false },
            { value: 'Europe/Madrid', label: 'Madrid', offset: '(GMT+1)', isBrazil: false },
            { value: 'Europe/Moscow', label: 'Moscow', offset: '(GMT+3)', isBrazil: false },
            { value: 'Europe/Oslo', label: 'Oslo', offset: '(GMT+1)', isBrazil: false },
            { value: 'Europe/Paris', label: 'Paris', offset: '(GMT+1)', isBrazil: false },
            { value: 'Europe/Prague', label: 'Prague', offset: '(GMT+1)', isBrazil: false },
            { value: 'Europe/Rome', label: 'Rome', offset: '(GMT+1)', isBrazil: false },
            { value: 'Europe/Stockholm', label: 'Stockholm', offset: '(GMT+1)', isBrazil: false },
            { value: 'Europe/Vienna', label: 'Vienna', offset: '(GMT+1)', isBrazil: false },
            { value: 'Europe/Warsaw', label: 'Warsaw', offset: '(GMT+1)', isBrazil: false },
            { value: 'Europe/Zurich', label: 'Zurich', offset: '(GMT+1)', isBrazil: false },
          ]
        },
        {
          name: 'Pacific',
          timezones: [
            { value: 'Pacific/Auckland', label: 'Auckland', offset: '(GMT+12)', isBrazil: false },
            { value: 'Pacific/Fiji', label: 'Fiji', offset: '(GMT+12)', isBrazil: false },
            { value: 'Pacific/Honolulu', label: 'Honolulu', offset: '(GMT-10)', isBrazil: false },
            { value: 'Pacific/Midway', label: 'Midway', offset: '(GMT-11)', isBrazil: false },
            { value: 'Pacific/Tahiti', label: 'Tahiti', offset: '(GMT-10)', isBrazil: false },
          ]
        }
      ];
    });
    
    // Filter timezones based on search query
    const filteredTimezones = computed(() => {
      if (!searchQuery.value) {
        return timezones.value;
      }
      
      const query = searchQuery.value.toLowerCase();
      
      return timezones.value.map(continent => {
        return {
          name: continent.name,
          timezones: continent.timezones.filter(timezone => {
            return timezone.label.toLowerCase().includes(query) || 
                   timezone.value.toLowerCase().includes(query) ||
                   timezone.offset.toLowerCase().includes(query);
          })
        };
      });
    });
    
    // Check if there are no results
    const noResults = computed(() => {
      return filteredTimezones.value.every(continent => continent.timezones.length === 0);
    });
    
    // Get selected timezone object
    const selectedTimezone = computed(() => {
      if (!selectedValue.value) return null;
      
      for (const continent of timezones.value) {
        const found = continent.timezones.find(tz => tz.value === selectedValue.value);
        if (found) return found;
      }
      
      return null;
    });
    
    // Toggle dropdown
    const toggleDropdown = () => {
      if (isEditing.value) return;
      isOpen.value = !isOpen.value;
      
      if (isOpen.value) {
        searchQuery.value = '';
      }
    };
    
    // Get option style
    const getOptionStyle = (timezone) => {
      const style = {};

      if (selectedValue.value === timezone.value) {
        style.backgroundColor = props.content.highlightColor;
      } else if (timezone.isBrazil) {
        style.color = props.content.brazilTextColor;
        style.backgroundColor = props.content.brazilBackgroundColor;
      }

      return style;
    };

    // Select timezone
    const selectTimezone = (timezone) => {
      if (isEditing.value) return;

      setSelectedValue(timezone.value);
      isOpen.value = false;

      emit('trigger-event', {
        name: 'change',
        event: { value: timezone.value }
      });
    };
    
    // Handle click outside
    const handleClickOutside = (event) => {
      if (selectContainer.value && !selectContainer.value.contains(event.target) && isOpen.value) {
        isOpen.value = false;
      }
    };
    
    // Watch for initial value changes
    watch(() => props.content.initialValue, (newValue) => {
      if (newValue !== selectedValue.value) {
        setSelectedValue(newValue || '');
        
        emit('trigger-event', {
          name: 'initValueChange',
          event: { value: newValue }
        });
      }
    });
    
    // Setup click outside listener
    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });
    
    onBeforeUnmount(() => {
      document.removeEventListener('click', handleClickOutside);
    });
    
    return {
      isOpen,
      searchQuery,
      selectContainer,
      selectedValue,
      selectedTimezone,
      filteredTimezones,
      noResults,
      toggleDropdown,
      selectTimezone,
      getOptionStyle
    };
  }
};
</script>

<style lang="scss" scoped>
.timezone-select {
  position: relative;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  
  &__selected {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-style: solid;
    cursor: pointer;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: #999;
    }
  }
  
  &__placeholder {
    color: #999;
  }
  
  &__arrow {
    display: flex;
    align-items: center;
    transition: transform 0.2s ease;
    
    &--open {
      transform: rotate(180deg);
    }
  }
  
  &__dropdown {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    background-color: #fff;
    border-style: solid;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    display: flex;
    flex-direction: column;
  }
  
  &__search {
    padding: 8px;
    border-bottom: 1px solid #eee;

    input {
      width: 100%;
      padding: 8px 10px;
      border-style: solid;

      &:focus {
        outline: none;
        border-color: #007bff;
      }
    }
  }
  
  &__options {
    overflow-y: auto;
    max-height: 350px;
  }
  
  &__continent {
    margin-bottom: 8px;
  }
  
  &__continent-name {
    padding: 8px 12px;
    font-weight: 600;
    color: #666;
    background-color: #f5f5f5;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  &__option {
    padding: 8px 12px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      background-color: #f5f5f5;
    }

    &--selected {
      font-weight: 500;
    }

    &--brazil {
      font-weight: 500;

      &:hover {
        background-color: v-bind('content.brazilHoverBackgroundColor') !important;
      }
    }
  }
  
  &__option-offset {
    color: #666;
    font-size: 12px;
  }
  
  &__no-results {
    padding: 16px;
    text-align: center;
    color: #666;
  }
}
</style>