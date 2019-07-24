import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import { TagPicker, IBasePicker, ITag, TagItemSuggestion } from 'office-ui-fabric-react/lib/Pickers';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import './CreateEventDialog.css';
const $ = require( 'jquery');

const _testTags: ITag[] = [
  'basketball',
  'baseball',
  'movie',
  'music',
  'sports',
  'pub',
  'dining',
  'travel',
  'surfing',
  'badminton',
  'gym',
  'coding',
  'hackathon',
  'sports',
  'social'
].map(item => ({ key: item, name: item }));

const DayPickerStrings: IDatePickerStrings = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',

  isRequiredErrorMessage: 'Field is required.',

  invalidInputErrorMessage: 'Invalid date format.'
};

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 150 }
};

const timeOptions: IDropdownOption[] = [];
timeOptions.push({key: '12:00 am', text: '12:00 am'});
timeOptions.push({key: '12:30 am', text: '12:30 am'});

for (let k = 0; k < 2; k++) {
  var time = '';
  for (let i = 1; i <= 11; i++) {
    time = String(i);
    for (let j = 0; j <= 2; j++) {
      if (j == 0) {
        time += ':00';
      } else {
        time += ':30';
      }

      if (k == 0) {
        time += ' am';
      } else {
        time += ' pm';
      }

      timeOptions.push({key: time, text: time});
      time = String(i);
    }
  }
  
  if (k == 0) {
    timeOptions.push({key: '12:00 pm', text: '12:00 pm'});
    timeOptions.push({key: '12:30 pm', text: '12:30 pm'});
  }
}

const minuteOptions: IDropdownOption[] = [];
for (let i = 0; i <= 60; i+=10) {
  let minutePair: IDropdownOption = {key: i, text: String(i)};
  minuteOptions.push(minutePair);
}

const ampmOptions: IDropdownOption[] = [
  { key: 'am', text: 'AM' },
  { key: 'pm', text: 'PM' },
];

export interface IDialogLargeHeaderExampleState {
  hideDialog: boolean;
  firstDayOfWeek?: DayOfWeek;
  eventName: String | undefined,
  location: String | undefined,
  startDate: Date | null | undefined,
  startTime: IDropdownOption | undefined,
  eventDescription: String | undefined,
  interests: String | undefined,
  isPickerDisabled: boolean,
}

<<<<<<< Updated upstream
export default class CreateEventDialog extends React.Component<{}, IDialogLargeHeaderExampleState> {
  public state: IDialogLargeHeaderExampleState = { hideDialog: true, firstDayOfWeek: DayOfWeek.Sunday }
=======
export default class CreateEventDialog extends React.Component<{}, CreateEventDialogState> {
  public state: CreateEventDialogState = { 
    hideDialog: true, 
    firstDayOfWeek: DayOfWeek.Sunday,
    eventName: '',
    location: '',
    startDate: null,
    startTime: undefined,
    eventDescription: '',
    interests: '',
    isPickerDisabled: false,
  }
>>>>>>> Stashed changes

  public render() {
    const { firstDayOfWeek, eventName, location } = this.state;

    return (
      <div>
        <DefaultButton secondaryText="Opens the Sample Dialog" onClick={this._showDialog} text="Create a New Event" />
        <Dialog
          maxWidth={1000}
          hidden={this.state.hideDialog}
          onDismiss={this._closeDialog}
          dialogContentProps={{
            type: DialogType.largeHeader,
            title: 'Create your event',
          }}
          modalProps={{
            isBlocking: false,
            styles: { main: { maxWidth: 450 } }
          }}
        >
          <TextField label="Event Title" required placeholder="Please enter event name here" onChange={(event, eventName)=>this.setState({eventName})} />
          <TextField label="Location" required placeholder="Enter Location here" onChange={(event, location)=>this.setState({location})}/>
          <div className="startTime">
            <DatePicker
              label="Start Date"
              isRequired={true}
              firstDayOfWeek={firstDayOfWeek}
              strings={DayPickerStrings}
              placeholder="Select a date..."
              ariaLabel="Select a date"
              onSelectDate={(startDate)=>this.setState({startDate})}
            />
          
            <Dropdown required={true} placeholder="Select Start Time" label="Start Time" 
              options={timeOptions} styles={dropdownStyles} onChange={(event, startTime)=> this.setState({startTime})}/>
          </div>

          {/* <div className="startTime">
            <DatePicker
              label="End Date"
              isRequired={true}
              firstDayOfWeek={firstDayOfWeek}
              strings={DayPickerStrings}
              placeholder="Select a date..."
              ariaLabel="Select a date"
              onSelectDate={(endDate)=>this.setState({endDate})}
            />
            <Dropdown required={true} placeholder="Select End Time" label="End Time" 
              options={timeOptions} styles={dropdownStyles} 
              onChange={(event, endTime)=> this.setState({endTime})}/>
          </div> */}
          <Label required={true}>{'Please Upload Event Image'}</Label>
          <input type="file"></input>
          <TagPicker
            onResolveSuggestions={this._onFilterChanged}
            getTextFromItem={this._getTextFromItem}
            pickerSuggestionsProps={{
              suggestionsHeaderText: 'Type your interest like "baseball" ',
              noResultsFoundText: 'No Interest Tags Found'
            }}
            disabled={this.state.isPickerDisabled}
            inputProps={{
              onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('OnBlur called'),
              onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
              'aria-label': 'Tag Picker'
            }}
            onChange={event=>this._onTagChange(event)}
          />
          <TextField label="Event description" multiline autoAdjustHeight onChange={(event, eventDescription)=> this.setState({eventDescription})} />
          <DialogFooter>
            <PrimaryButton onClick={e=>this._closeDialogAndSubmit(e)} text="Save" />
            <DefaultButton onClick={this._closeDialog} text="Cancel" />
          </DialogFooter>
        </Dialog>
      </div>
    );
  }

  private _showDialog = (): void => {
    this.setState({ hideDialog: false });
  };

  private _closeDialogAndSubmit = (e: any): void => {
    this.setState({ hideDialog: true });
    e.preventDefault();
    const { eventName, location, startDate, startTime, eventDescription, interests } = this.state;
    
    let startDateTime: String = startDate ? String(startDate.getFullYear() + '-' + startDate.getMonth() + '-' + startDate.getDay()): '';
    startDateTime = startDateTime +  ' ' + (startTime ? startTime.text : '');

    const eventBody = { 
      userName: 'xiaoming',
      name: eventName,
      startTime: startDateTime,
      location: location,
      interests: interests,
    };

    $.get({
      method: 'GET',
      url: 'https://ftallget.westus2.azurecontainer.io/createevent',
      headers: {
          'Content-Type': 'application/json',
      },
      // query parameters go under "data" as an Object
      data: {
        username: 'xiaoming',
        name: eventName,
        starttime: startDateTime,
        location: location,
        description: eventDescription,
        interests: interests,
      }
  })
  .then((res: any)=>{
    console.log(res);
  }).catch((error: any) => {
    console.log(error);
  })

  };

  private _getTextFromItem(item: ITag): string {
    return item.name;
  }

  private _onFilterChanged = (filterText: string, tagList: ITag[] | undefined): ITag[] => {
    const interests = filterText
          ? _testTags
              .filter(tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0)
              .filter(tag => !this._listContainsDocument(tag, tagList))
          : [];
    let tags: Array<String> = [];
    interests.forEach (tag=>{
      tags.push(tag.name);
    })
    
    return interests;
  };

  private _listContainsDocument(tag: ITag, tagList?: ITag[]) {
    if (!tagList || !tagList.length || tagList.length === 0) {
      return false;
    }
    return tagList.filter(compareTag => compareTag.key === tag.key).length > 0;
  }

  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  };

  private _onTagChange = (event: any): void => {
    let interestTags:String = '';
    event.forEach((tag:ITag)=>{
      interestTags = interestTags + tag.name + ',';
    })

    this.setState({interests: interestTags.substring(0, interestTags.length - 1)});
  }
}