/**
 * Created by stylehuan on 2016/7/12.
 */
class SceneEvent extends egret.Event {
    public static  _dispatch: egret.EventDispatcher = new egret.EventDispatcher();
    public static READY:string = "ready";
    public static ENTRY:string = "entry";
    public static OUT:string = "out";
    public static DESTROY:string = "destroy";

    /**
     * 使用 EventDispatcher 对象注册事件侦听器对象，以使侦听器能够接收事件通知。可以为特定类型的事件、阶段和优先级在显示列表中的所有节点上注册事件侦听器。
     * @param type
     * @param listener
     * @param useCapture
     * @param priority
     * @param useWeakReference
     */
    public static addEventListener(type: string, listener: Function, target: any, useCapture: boolean = false, priority: number = 0): void {
        this._dispatch.addEventListener(type, listener, target, useCapture, priority);
    }

    /**
     * 从 EventDispatcher 对象中删除侦听器。如果没有向 EventDispatcher 对象注册任何匹配的侦听器，则对此方法的调用没有任何效果。
     * @param type
     * @param listener
     * @param useCapture
     */
    public static removeEventListener(type: string, listener: Function, target: any, useCapture: boolean = false): void {
        this._dispatch.removeEventListener(type, listener, target, useCapture);
    }

    /**
     * 将事件分派到事件流中。事件目标是对其调用 dispatchEvent() 方法的 EventDispatcher 对象。
     * @param event
     */
    public static dispatchEvents(event: egret.Event):void
    {

        this._dispatch.dispatchEvent(event); // .target,event.type,event.bubbles,this.data
    }

    public data: any;
    public constructor(type: string, _data: any = null, bubbles: boolean = false, cancelable: boolean = false) {
        super(type, bubbles, cancelable);
        this.data = _data;
    }
}