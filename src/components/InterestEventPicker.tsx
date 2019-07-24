import * as React from 'react';

import { TagPicker, IBasePicker, ITag } from 'office-ui-fabric-react/lib/Pickers';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import './InterestEventPicker.css';

const rootClass = mergeStyles({
  maxWidth: 1000
});

export interface InterestEventPickerState {
  hideDialog: boolean;
  isPickerDisabled?: boolean;
  username: string | undefined;
  interests: String | undefined;
}

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

export default class InterestEventPicker extends React.Component<{}, InterestEventPickerState> {
  // All pickers extend from BasePicker specifying the item type.
  private _picker = React.createRef<IBasePicker<ITag>>();

  constructor(props: {}) {
    super(props);
    this.state = {
      isPickerDisabled: false,
      hideDialog: true,
      username: '',
      interests: '',
    };
  }

  public render() {
    return (
      <div className={rootClass}>
      <DefaultButton secondaryText="Sign up" onClick={this._showDialog} text="Sign up" />
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
        }}>
        <TextField label="UserName" required placeholder="UserName" onChange={(event, username)=>this.setState({username})}/>
        <Label required={true}>{'Please type and pick your interest tag:'}</Label>
        <TagPicker
          onResolveSuggestions={this._onFilterChanged}
          getTextFromItem={this._getTextFromItem}
          pickerSuggestionsProps={{
            suggestionsHeaderText: 'Type your interest like "baseball" ',
            noResultsFoundText: 'No Interest Tags Found'
          }}
          disabled={this.state.isPickerDisabled}
          inputProps={{
            onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
            onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
            'aria-label': 'Tag Picker'
          }}
          onChange={event=>this._onTagChange(event)}
        />
        <DialogFooter>
            <PrimaryButton onClick={this._closeDialog} text="Save" />
            <DefaultButton onClick={this._closeDialog} text="Cancel" />
          </DialogFooter>
      </Dialog>
      </div>
    );
  }

  private _getTextFromItem(item: ITag): string {
    return item.name;
  }

  private _onFilterChanged = (filterText: string, tagList: ITag[] | undefined): ITag[] => {
    return filterText
      ? _testTags
          .filter(tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0)
          .filter(tag => !this._listContainsDocument(tag, tagList))
      : [];
  };

  private _listContainsDocument(tag: ITag, tagList?: ITag[]) {
    if (!tagList || !tagList.length || tagList.length === 0) {
      return false;
    }
    return tagList.filter(compareTag => compareTag.key === tag.key).length > 0;
  }

  private _showDialog = (): void => {
    this.setState({ hideDialog: false });
  };

  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  };

  private _onTagChange = (event: any): void => {
    let interestTags:String = '';
    event.forEach((tag:ITag)=>{
      interestTags = interestTags + tag.name + ',';
    })

    this.setState({interests: interestTags.substring(0, interestTags.length - 1)});
    console.log(this.state.interests);
  }
}