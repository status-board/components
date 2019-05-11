import getColorKey from './get-color-key';

describe('getColorKey', (): void => {
    it('should return the WidgetStatus key when passed a WidgetStatus message', (): void => {
        const statusKey = getColorKey('good');

        expect(statusKey).toEqual('success');
    });
    it('should return the unknow if the passed WidgetStatus message doesn\'t exist ', (): void => {
        const statusKey = getColorKey('crap');

        expect(statusKey).toEqual('unknown');
    });
});
