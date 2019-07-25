import * as React from 'react';

import { TagPicker, IBasePicker, ITag } from 'office-ui-fabric-react/lib/Pickers';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import './InterestEventPicker.css';
const $ = require( 'jquery');

const rootClass = mergeStyles({
  maxWidth: 1000
});

export interface InterestEventPickerState {
  hideDialog: boolean;
  isPickerDisabled?: boolean;
  username: any;
  interests: any;
  image: any;
}

const _testTags: ITag[] = [
  'hiking',
  'game',
  'video game',
  'boardgame',
  'anime',
  'diving',
  'camping',
  'adventure',
  'photography',
  'dance',
  'tech',
  'bbq',
  'film',
  'art',
  'charity',
  'Sci-Fi',
  'basketball',
  'baseball',
  'movie',
  'music',
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

/*
interface IChild {  
  GetNewUserName:(ParUserName:string)=>void;  
}  
*/

export default class InterestEventPicker extends React.Component<{GetNewUserName: any}, InterestEventPickerState> {
  // All pickers extend from BasePicker specifying the item type.
  private _picker = React.createRef<IBasePicker<ITag>>();

  constructor(props: {GetNewUserName: any}) {
    super(props);
    this.state = {
      isPickerDisabled: false,
      hideDialog: false,
      username: '',
      interests: '',
      image: null,
    };
  }

  public render() {
    return (
      <div className={rootClass}>
      <Dialog
        maxWidth={1000}
        hidden={this.state.hideDialog}
        onDismiss={this._closeDialog}
        dialogContentProps={{
          type: DialogType.largeHeader,
          title: 'Sign up',
        }}
        modalProps={{
          isBlocking: false,
          styles: { main: { maxWidth: 450 } }
        }}>
        <TextField label="UserName" required placeholder="UserName" onChange={(event, username)=>{
          this.setState({username})
          }}/>

        <Label required={true}>{'Please Upload your photo'}</Label>
        <input type="file" onChange={this._fileChangedHandler}></input>
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
            <PrimaryButton onClick={this._closeDialogAndSubmit} text="Sign up" />
            <DefaultButton onClick={this._closeDialog} text="Cancel" />
          </DialogFooter>
      </Dialog>
      </div>
    );
  }
  

  private _closeDialogAndSubmit = (e: any): void => {
    this.setState({ hideDialog: true });
    e.preventDefault();
    const { username, interests, image } = this.state;

    let formData = new FormData();
    formData.append('profileimage', image);
    formData.append('username', username);
    formData.append('interests', interests);

    const data = {
        username: username,
        interests: interests,
    };

    $.ajax({
      // query parameters go under "data" as an Object
      type: 'POST',
      url: 'https://ftubuntu.westus2.azurecontainer.io/signup',
      data: formData,
      contentType: false,
      processData: false,
      mimetype: 'multipart/form-data',
    })
    .then((res: any)=>{
      console.log(res);
      this.props.GetNewUserName(this.state.username);
    }).catch((error: any) => {
      alert("sign up failed")
      console.log(error);
    })

    // axios.post('https://ftubuntu.westus2.azurecontainer.io/signup', 
    // {
    //   username: username,
    //   interests: interests,
    // }).then((res: any) => {
    //   console.log(res);
    // }).catch((error: any) => {
    //   console.log(error);
    // })

  };

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

  private _closeDialog = (): void => {
    this.props.GetNewUserName(this.state.username);
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

  private _fileChangedHandler = (file: any): void => {
    console.log(file.target.files[0]);
    this.setState({ image: file.target.files[0] });
    console.log(this.state.image);
  };

  /*
  private handleLangChange = (): void => {
    this.props.GetNewUserName("xiaoming");
  }
  */
}