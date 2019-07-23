import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import './CreateEventDialog.css';

const _ = require('lodash');

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
    for (let j = 0; j < 2; j++) {
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

export interface CreateEventDialogState {
  hideDialog: boolean;
  firstDayOfWeek?: DayOfWeek;
}

export default class CreateEventDialog extends React.Component<{}, CreateEventDialogState> {
  public state: CreateEventDialogState = { hideDialog: true, firstDayOfWeek: DayOfWeek.Sunday }

  public render() {
    const { firstDayOfWeek } = this.state;

    return (
      <div className="CreateEventDialogButton">
        <DefaultButton className="NavButton" onClick={this._showDialog} iconProps={{ iconName: 'AddEvent' }} />
        <Dialog className="CreateEventDialog"
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
          <TextField label="Event Title" required placeholder="Please enter event name here"/>
          <TextField label="Location" required placeholder="Enter Location here"/>
          <div className="startTime">
            <DatePicker
              label="Start Date"
              isRequired={true}
              firstDayOfWeek={firstDayOfWeek}
              strings={DayPickerStrings}
              placeholder="Select a date..."
              ariaLabel="Select a date"
            />
          
            <Dropdown required={true} placeholder="Select Start Time" label="Start Time" options={timeOptions} styles={dropdownStyles} />
          </div>

          <div className="startTime">
            <DatePicker
              label="End Date"
              isRequired={true}
              firstDayOfWeek={firstDayOfWeek}
              strings={DayPickerStrings}
              placeholder="Select a date..."
              ariaLabel="Select a date"
            />
            <Dropdown required={true} placeholder="Select End Time" label="End Time" options={timeOptions} styles={dropdownStyles} />
          </div>
          <Label required={true}>{'Please Upload Event Image'}</Label>
          <input type="file"></input>
          <TextField label="Event description" multiline autoAdjustHeight />
          <DialogFooter>
            <PrimaryButton onClick={this._closeDialog} text="Save" />
            <DefaultButton onClick={this._closeDialog} text="Cancel" />
          </DialogFooter>
        </Dialog>
      </div>
    );
  }

  private _showDialog = (): void => {
    this.setState({ hideDialog: false });
  };

  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  };
}