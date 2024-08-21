import {render, screen, act} from '@testing-library/react';
import Select from './Select';
import {SelectOption} from './Select.types';
global.ResizeObserver = require('resize-observer-polyfill');

const mockOptions: SelectOption<string>[] = [
  {label: 'option 1', value: 'opt-1'},
  {label: 'option 2', value: 'opt-2'},
  {label: 'option 3', value: 'opt-3'},
];

describe('selector', () => {
  it('should display placeholder when no value', async () => {
    render(
      <Select
        label={'Test'}
        options={mockOptions}
        onChange={() => {}}
        placeholder={'Placeholder'}
      />,
    );
    const el = await screen.findByText('Placeholder');
    expect(el).toBeTruthy();
  });

  it('should not display placeholder when have value', async () => {
    render(
      <Select
        value={'opt-1'}
        label={'Test'}
        options={mockOptions}
        onChange={() => {}}
        placeholder={'Placeholder'}
      />,
    );
    const el = await screen.findByText('Placeholder').catch(() => null);
    expect(el).toBeFalsy();
  });

  it('should toggle menu on click', async () => {
    render(<Select value={'opt-1'} label={'select'} options={mockOptions} onChange={() => {}} />);
    const controlValue = await screen.findByText('option 1');
    await act(() => controlValue.click());
    const selectMenu1 = await screen.findByTestId('select-menu').catch(() => null);
    expect(selectMenu1).toBeTruthy();
    await act(() => controlValue.click());
    const selectMenu2 = await screen.findByTestId('select-menu').catch(() => null);
    expect(selectMenu2).toBeFalsy();
  });

  it('should display multi select menu on multi select', async () => {
    render(
      <Select
        value={['opt-1']}
        label={'select'}
        options={mockOptions}
        onChange={() => {}}
        isMultiple
      />,
    );
    const controlValue = await screen.findByText('option 1');
    await act(() => controlValue.click());
    const selectMenu = await screen.findByTestId('multi-select-menu').catch(() => null);
    expect(selectMenu).toBeTruthy();
  });

  it('should display single select menu on single select', async () => {
    render(<Select value={'opt-1'} label={'select'} options={mockOptions} onChange={() => {}} />);
    const controlValue = await screen.findByText('option 1');
    await act(() => controlValue.click());
    const selectMenu = await screen.findByTestId('single-select-menu').catch(() => null);
    expect(selectMenu).toBeTruthy();
  });

  it('should update value on option click', async () => {
    render(
      <Select
        value={'opt-1'}
        label={'select'}
        options={mockOptions}
        onChange={(newValue) => expect(newValue).toBe('opt-2')}
      />,
    );
    const controlValue = await screen.findByText('option 1');
    await act(() => controlValue.click());
    const newOption = await screen.findByText('option 2').catch(() => null);
    expect(newOption).toBeTruthy();
    await act(() => newOption?.click());
    const menu = await screen.findByTestId('select-menu').catch(() => null);
    expect(menu).toBeFalsy();
  });
});
